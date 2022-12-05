#!/usr/bin/env bash

# https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# Define the input vars
GITHUB_REPOSITORY_OWNER=${1?Error: Please pass username, e.g. BMogetta}

echo "GITHUB_REPOSITORY_OWNER: $GITHUB_REPOSITORY_OWNER"

echo "@$GITHUB_REPOSITORY_OWNER" > .github/CODEOWNERS