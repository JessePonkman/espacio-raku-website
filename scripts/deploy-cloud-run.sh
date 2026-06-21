#!/usr/bin/env bash
set -Eeuo pipefail

# Build this Vite static site image, push it to GCP Artifact Registry, then deploy it to Cloud Run.
#
# Required env vars:
#   GCP_PROJECT          Your Google Cloud project ID
#
# Optional env vars:
#   TAG                  Image tag. Default: current git short SHA, with a timestamp
#                        suffix when the worktree is dirty, or timestamp if not in git
#   CLOUD_RUN_SERVICE    Cloud Run service name. Default: espacio-raku-website
#   CLOUD_RUN_REGION     Cloud Run region. Default: us-central1
#   DOCKER_PLATFORM      Target image platform(s). Default: linux/amd64
#   ALLOW_UNAUTHENTICATED Whether to expose the service publicly. Default: true
#   SITE_URL             Final public origin used for canonical, social, and sitemap URLs
#
# Example:
#   GCP_PROJECT=my-gcp-project \
#   CLOUD_RUN_REGION=us-central1 \
#   SITE_URL=https://www.example.com \
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

ensure_artifact_registry_api() {
  local enabled_api
  local api_service="artifactregistry.googleapis.com"

  echo "==> Checking Artifact Registry API"
  if ! enabled_api="$(gcloud services list \
    --enabled \
    --project "$GCP_PROJECT" \
    --filter "config.name=${api_service}" \
    --format 'value(config.name)')"; then
    echo "Error: could not check the Artifact Registry API status." >&2
    exit 1
  fi

  if [[ "$enabled_api" != "$api_service" ]]; then
    echo "==> Enabling Artifact Registry API"
    gcloud services enable "$api_service" \
      --project "$GCP_PROJECT" \
      --quiet
  fi
}

ensure_artifact_registry_repository() {
  local repository_name="$1"
  local repository_location="$2"
  local repository_error
  local repository_format
  local error_file

  echo "==> Checking Artifact Registry repository: ${repository_name}"
  error_file="$(mktemp)"
  if repository_format="$(gcloud artifacts repositories describe "$repository_name" \
    --project "$GCP_PROJECT" \
    --location "$repository_location" \
    --format 'value(format)' 2>"$error_file")"; then
    rm -f "$error_file"
    if [[ "$repository_format" != "DOCKER" ]]; then
      echo "Error: Artifact Registry repository '${repository_name}' exists in '${repository_location}' but has format '${repository_format:-unknown}', not DOCKER." >&2
      exit 1
    fi
    return
  fi

  repository_error="$(cat "$error_file")"
  rm -f "$error_file"

  if [[ "$repository_error" != *"NOT_FOUND"* && "$repository_error" != *"not found"* ]]; then
    echo "Error: could not inspect Artifact Registry repository '${repository_name}'." >&2
    echo "$repository_error" >&2
    exit 1
  fi

  echo "==> Creating Artifact Registry repository: ${repository_name}"
  gcloud artifacts repositories create "$repository_name" \
    --project "$GCP_PROJECT" \
    --location "$repository_location" \
    --repository-format docker \
    --description "Docker images for Espacio Raku" \
    --quiet
}

main() {
  require_command docker
  require_command gcloud

  require_env GCP_PROJECT

  local repository_name="espacio-raku"
  local image_name="espacio-raku-website"
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

  local registry_host="${cloud_run_region}-docker.pkg.dev"
  local image_base="${registry_host}/${GCP_PROJECT}/${repository_name}/${image_name}"
  local image="${image_base}:${tag}"
  local latest_image="${image_base}:latest"

  echo "==> Artifact Registry image: ${image}"
  echo "==> Artifact Registry repository: ${repository_name}"
  echo "==> Cloud Run service: ${cloud_run_service}"
  echo "==> GCP project: ${GCP_PROJECT}"
  echo "==> Cloud Run region: ${cloud_run_region}"
  echo "==> Docker platform: ${docker_platform}"

  ensure_artifact_registry_api
  ensure_artifact_registry_repository "$repository_name" "$cloud_run_region"

  echo "==> Configuring Docker authentication for Artifact Registry"
  gcloud auth configure-docker "$registry_host" --quiet

  echo "==> Building and pushing Docker image"
  docker buildx build \
    --platform "$docker_platform" \
    --build-arg "SITE_URL=${SITE_URL:-}" \
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
