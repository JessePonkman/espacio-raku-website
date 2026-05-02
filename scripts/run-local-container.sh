#!/usr/bin/env bash
set -Eeuo pipefail

# Build and run the site locally in Docker for testing.
#
# Usage:
#   ./scripts/run-local-container.sh
#
# Optional env vars:
#   IMAGE_NAME       Default: espacio-raku-website-local
#   CONTAINER_NAME   Default: espacio-raku-website-local
#   HOST_PORT        Default: 8080
#   CONTAINER_PORT   Default: 80
#   NO_CACHE         Set to true to build without Docker cache. Default: false
#
# Examples:
#   HOST_PORT=3000 ./scripts/run-local-container.sh
#   NO_CACHE=true ./scripts/run-local-container.sh

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: '$1' is required but was not found in PATH." >&2
    exit 1
  fi
}

main() {
  require_command docker

  local image_name="${IMAGE_NAME:-espacio-raku-website-local}"
  local container_name="${CONTAINER_NAME:-espacio-raku-website-local}"
  local host_port="${HOST_PORT:-8080}"
  local container_port="${CONTAINER_PORT:-80}"
  local no_cache="${NO_CACHE:-false}"

  echo "==> Building Docker image: ${image_name}"
  if [[ "$no_cache" == "true" ]]; then
    docker build --no-cache -t "$image_name" .
  else
    docker build -t "$image_name" .
  fi

  if docker ps -a --format '{{.Names}}' | grep -Fxq "$container_name"; then
    echo "==> Removing existing container: ${container_name}"
    docker rm -f "$container_name" >/dev/null
  fi

  echo "==> Starting container: ${container_name}"
  docker run \
    --rm \
    --name "$container_name" \
    --publish "${host_port}:${container_port}" \
    "$image_name" >/dev/null

  echo "==> Local container is running"
  echo "URL: http://localhost:${host_port}"
  echo
  echo "Useful commands:"
  echo "  docker logs -f ${container_name}"
  echo "  docker stop ${container_name}"
}

main "$@"
