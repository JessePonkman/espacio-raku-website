#!/usr/bin/env bash
set -Eeuo pipefail

# Deploy orchestrator. Loads the gitignored .env.deploy file (if present)
# instead of requiring every deploy variable to be typed by hand, then runs
# scripts/set-deploy-env.sh + scripts/deploy-cloud-run.sh in one shot.
#
# Usage:
#   ./deploy.sh [-e VAR=VALUE ...] [--override]
#
#   -e, --env VAR=VALUE Override one env var before deploying (repeatable,
#                       takes precedence over .env.deploy)
#   --override          Show every set-deploy-env.sh prompt instead of
#                       silently reusing .env.deploy values
#   -h, --help          Show this help
#
# Setup: copy .env.deploy.example to .env.deploy, then fill in real values.
# That file is gitignored and must never be committed.

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
env_file="${ENV_FILE:-${root_dir}/.env.deploy}"

override_mode=false
env_overrides=()

print_usage() {
  cat <<'EOF'
Usage: ./deploy.sh [-e VAR=VALUE ...] [--override]

  -e, --env VAR=VALUE Override one env var before deploying (repeatable)
  --override          Show every set-deploy-env.sh prompt instead of
                      silently reusing .env.deploy values
  -h, --help          Show this help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -e|--env)
      if [[ $# -lt 2 ]]; then
        echo "Error: ${1} requires a VAR=VALUE argument." >&2
        exit 1
      fi
      if [[ "$2" != *=* ]]; then
        echo "Error: -e/--env expects VAR=VALUE, got '${2}'." >&2
        exit 1
      fi
      env_overrides+=("$2")
      shift 2
      ;;
    --override)
      override_mode=true
      shift
      ;;
    -h|--help)
      print_usage
      exit 0
      ;;
    *)
      echo "Error: unknown option '$1'." >&2
      print_usage >&2
      exit 1
      ;;
  esac
done

color_reset=$'\033[0m'
banner_style=$'\033[1;97;44m'  # bold white on blue
banner_width=70

banner_line() {
  local text="$1"
  local pad=$(( banner_width - ${#text} ))
  (( pad < 0 )) && pad=0
  printf '%s%s%*s%s\n' "$banner_style" "$text" "$pad" "" "$color_reset"
}

blank_line=""
for ((i = 0; i < banner_width; i++)); do blank_line+=" "; done

echo
banner_line "$blank_line"
banner_line "  ⚠  CONFIRMÁ EL DEPLOY — ESPACIO RAKU (FRONTEND)"
banner_line "$blank_line"
banner_line "  Se va a desplegar el sitio a producción."
if [[ "$override_mode" == "true" ]]; then
  banner_line "  --override: se van a repreguntar todas las variables."
else
  banner_line "  Se reutilizan los valores de .env.deploy sin preguntar."
fi
if [[ ${#env_overrides[@]} -gt 0 ]]; then
  banner_line "  Overrides (-e):"
  for pair in "${env_overrides[@]}"; do
    banner_line "    - ${pair%%=*}=..."
  done
fi
banner_line "$blank_line"
echo

read -r -p "Escribí 'si' para continuar (cualquier otra cosa cancela): " confirm
confirm_lower="$(printf '%s' "$confirm" | tr '[:upper:]' '[:lower:]')"
if [[ "$confirm_lower" != "si" ]]; then
  echo "Deploy cancelado."
  exit 1
fi

if [[ -f "$env_file" ]]; then
  echo "==> Loading ${env_file}"
  set -a
  # shellcheck disable=SC1090
  source "$env_file"
  set +a
else
  echo "==> No ${env_file} found; every variable will be prompted for."
  echo "==> Copy ${root_dir}/.env.deploy.example to .env.deploy to skip prompts next time."
fi

for pair in "${env_overrides[@]+"${env_overrides[@]}"}"; do
  export "${pair}"
done

if [[ "$override_mode" == "true" ]]; then
  export NON_INTERACTIVE=false
else
  export NON_INTERACTIVE=true
fi

cd "$root_dir"
# shellcheck disable=SC1091
source "${root_dir}/scripts/set-deploy-env.sh"
exec "${root_dir}/scripts/deploy-cloud-run.sh"
