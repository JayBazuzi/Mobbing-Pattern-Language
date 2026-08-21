#!/usr/bin/env bash
# Build the Jekyll site and validate the output.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"


command -v gem >/dev/null || { echo "error: 'gem' not found; install Ruby first" >&2; exit 1; }
command -v bundle >/dev/null || gem install bundler
bundle install
bundle exec jekyll build --destination _site
