#!/usr/bin/env bash

# Source this file before running ./scripts/deploy-cloud-run.sh.
#
# Usage:
#   source ./scripts/set-deploy-env.sh
#   ./scripts/deploy-cloud-run.sh
#
# A normal execution like `./scripts/set-deploy-env.sh` will NOT persist env vars
# in your current shell. Use `source` or `.` instead.

is_sourced() {
  if [[ -n "${ZSH_VERSION:-}" ]]; then
    [[ "${ZSH_EVAL_CONTEXT:-}" == *:file:* ]]
  elif [[ -n "${BASH_VERSION:-}" ]]; then
    [[ "${BASH_SOURCE[0]}" != "${0}" ]]
  else
    # Best effort for other shells.
    return 0
  fi
}

if ! is_sourced; then
  echo "Error: this script must be sourced so env vars persist in your shell." >&2
  echo "Run: source ./scripts/set-deploy-env.sh" >&2
  exit 1
fi

get_var_value() {
  local var_name="$1"
  eval "printf '%s' \"\${${var_name}:-}\""
}

read_line() {
  local prompt="$1"
  REPLY_VALUE=""
  printf '%s' "$prompt"
  IFS= read -r REPLY_VALUE
}

read_secret() {
  local prompt="$1"
  REPLY_VALUE=""
  printf '%s' "$prompt"
  stty -echo 2>/dev/null || true
  IFS= read -r REPLY_VALUE
  stty echo 2>/dev/null || true
  echo
}

prompt_required() {
  local var_name="$1"
  local label="$2"
  local current_value
  local value=""

  current_value="$(get_var_value "$var_name")"

  while [[ -z "$value" ]]; do
    if [[ -n "$current_value" ]]; then
      read_line "${label} [${current_value}]: "
      value="${REPLY_VALUE:-$current_value}"
    else
      read_line "${label}: "
      value="$REPLY_VALUE"
    fi

    if [[ -z "$value" ]]; then
      echo "${label} is required."
    fi
  done

  export "${var_name}=${value}"
}

prompt_optional() {
  local var_name="$1"
  local label="$2"
  local default_value="$3"
  local current_value
  local shown_default
  local value=""

  current_value="$(get_var_value "$var_name")"
  shown_default="${current_value:-$default_value}"

  read_line "${label} [${shown_default}]: "
  value="${REPLY_VALUE:-$shown_default}"

  export "${var_name}=${value}"
}

prompt_secret_optional() {
  local var_name="$1"
  local label="$2"
  local current_value
  local value=""
  local prompt_suffix=""

  current_value="$(get_var_value "$var_name")"

  if [[ -n "$current_value" ]]; then
    prompt_suffix=" [already set, press Enter to keep]"
  else
    prompt_suffix=" [optional, press Enter to skip]"
  fi

  read_secret "${label}${prompt_suffix}: "
  value="$REPLY_VALUE"

  if [[ -n "$value" ]]; then
    export "${var_name}=${value}"
  elif [[ -n "$current_value" ]]; then
    export "${var_name}=${current_value}"
  else
    unset "$var_name"
  fi
}

echo "Setting deployment environment variables..."
echo

prompt_required "DOCKERHUB_USERNAME" "Docker Hub username or organization"
prompt_required "GCP_PROJECT" "GCP project ID"

prompt_optional "IMAGE_NAME" "Docker Hub image/repository name" "espacio-raku-website"
prompt_optional "CLOUD_RUN_SERVICE" "Cloud Run service name" "espacio-raku-website"
prompt_optional "CLOUD_RUN_REGION" "Cloud Run region" "us-central1"
prompt_optional "ALLOW_UNAUTHENTICATED" "Allow public unauthenticated access? true/false" "true"

prompt_secret_optional "DOCKER_PASSWORD" "Docker Hub access token/password"

read_line "Custom image tag [optional, press Enter to use git SHA]: "
if [[ -n "$REPLY_VALUE" ]]; then
  export TAG="$REPLY_VALUE"
else
  unset TAG
fi

echo
echo "Deployment environment variables loaded:"
echo "DOCKERHUB_USERNAME=${DOCKERHUB_USERNAME}"
echo "GCP_PROJECT=${GCP_PROJECT}"
echo "IMAGE_NAME=${IMAGE_NAME}"
echo "CLOUD_RUN_SERVICE=${CLOUD_RUN_SERVICE}"
echo "CLOUD_RUN_REGION=${CLOUD_RUN_REGION}"
echo "ALLOW_UNAUTHENTICATED=${ALLOW_UNAUTHENTICATED}"
if [[ -n "${DOCKER_PASSWORD:-}" ]]; then
  echo "DOCKER_PASSWORD=(set, hidden)"
else
  echo "DOCKER_PASSWORD=(not set; deploy script will assume docker login was already done)"
fi
if [[ -n "${TAG:-}" ]]; then
  echo "TAG=${TAG}"
else
  echo "TAG=(not set; deploy script will use current git short SHA)"
fi
