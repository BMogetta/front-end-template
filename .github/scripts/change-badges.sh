#!/usr/bin/env bash

# https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# Define the input vars
GITHUB_REPOSITORY=${1?Error: Please pass username/repo, e.g. BMogetta/front-end-template}

echo "GITHUB_REPOSITORY: $GITHUB_REPOSITORY"

GH_URL="https://github.com/$GITHUB_REPOSITORY"

sed -i "s|https://github.com/BMogetta/front-end-template|$GH_URL|g" README.md
