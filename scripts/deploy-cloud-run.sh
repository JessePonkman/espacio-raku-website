#!/usr/bin/env bash
set -Eeuo pipefail

# Build this Vite static site image, push it to Docker Hub, then deploy it to GCP Cloud Run.
#
# Required env vars:
#   DOCKERHUB_USERNAME   Your Docker Hub username/org
#   GCP_PROJECT          Your Google Cloud project ID
#
# Optional env vars:
#   IMAGE_NAME           Docker Hub repository name. Default: espacio-raku-website
#   TAG                  Image tag. Default: current git short SHA, with a timestamp
#                        suffix when the worktree is dirty, or timestamp if not in git
#   CLOUD_RUN_SERVICE    Cloud Run service name. Default: espacio-raku-website
#   CLOUD_RUN_REGION     Cloud Run region. Default: us-central1
#   DOCKER_PLATFORM      Target image platform(s). Default: linux/amd64
#   ALLOW_UNAUTHENTICATED Whether to expose the service publicly. Default: true
#   DOCKER_PASSWORD      If set, script logs in to Docker Hub non-interactively
#
# Example:
#   DOCKERHUB_USERNAME=myuser \
#   GCP_PROJECT=my-gcp-project \
#   CLOUD_RUN_REGION=us-central1 \
#   ./scripts/deploy-cloud-run.sh

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: '$1' is required but was not found in PATH." >&2
    exit 1
  fi
}

require_env() {
  if [[ -z "${!1:-}" ]]; then
    echo "Error: environment variable '$1' is required." >&2
    exit 1
  fi
}

main() {
  require_command docker
  require_command gcloud

  require_env DOCKERHUB_USERNAME
  require_env GCP_PROJECT

  local image_name="${IMAGE_NAME:-espacio-raku-website}"
  local cloud_run_service="${CLOUD_RUN_SERVICE:-espacio-raku-website}"
  local cloud_run_region="${CLOUD_RUN_REGION:-us-central1}"
  local docker_platform="${DOCKER_PLATFORM:-linux/amd64}"
  local allow_unauthenticated="${ALLOW_UNAUTHENTICATED:-true}"

  local tag="${TAG:-}"
  if [[ -z "$tag" ]]; then
    if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
      tag="$(git rev-parse --short HEAD)"
      if [[ -n "$(git status --porcelain)" ]]; then
        tag="${tag}-dirty-$(date +%Y%m%d%H%M%S)"
      fi
    else
      tag="$(date +%Y%m%d%H%M%S)"
    fi
  fi

  local image="docker.io/${DOCKERHUB_USERNAME}/${image_name}:${tag}"
  local latest_image="docker.io/${DOCKERHUB_USERNAME}/${image_name}:latest"

  echo "==> Docker image: ${image}"
  echo "==> Cloud Run service: ${cloud_run_service}"
  echo "==> GCP project: ${GCP_PROJECT}"
  echo "==> Cloud Run region: ${cloud_run_region}"
  echo "==> Docker platform: ${docker_platform}"

  if [[ -n "${DOCKER_PASSWORD:-}" ]]; then
    echo "==> Logging in to Docker Hub as ${DOCKERHUB_USERNAME}"
    printf '%s' "$DOCKER_PASSWORD" | docker login --username "$DOCKERHUB_USERNAME" --password-stdin
  else
    echo "==> Skipping Docker login. Assuming you are already logged in."
  fi

  echo "==> Building and pushing Docker image"
  docker buildx build \
    --platform "$docker_platform" \
    --tag "$image" \
    --tag "$latest_image" \
    --push \
    .

  local auth_flag="--no-allow-unauthenticated"
  if [[ "$allow_unauthenticated" == "true" ]]; then
    auth_flag="--allow-unauthenticated"
  fi

  echo "==> Deploying to Cloud Run"
  gcloud run deploy "$cloud_run_service" \
    --project "$GCP_PROJECT" \
    --region "$cloud_run_region" \
    --platform managed \
    --image "$image" \
    --port 80 \
    $auth_flag

  echo "==> Deployment complete"
  gcloud run services describe "$cloud_run_service" \
    --project "$GCP_PROJECT" \
    --region "$cloud_run_region" \
    --platform managed \
    --format 'value(status.url)'
}

main "$@"
