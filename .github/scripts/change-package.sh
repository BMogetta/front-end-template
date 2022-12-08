#!/usr/bin/env bash

# https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# Define the input vars
GITHUB_REPOSITORY=${1?Error: Please pass username/repo, e.g. BMogetta/front-end-template}
GITHUB_REPOSITORY_OWNER=${2?Error: Please pass username, e.g. BMogetta}

echo "GITHUB_REPOSITORY: $GITHUB_REPOSITORY"
echo "GITHUB_REPOSITORY_OWNER: $GITHUB_REPOSITORY_OWNER"

# jq is like sed for JSON data
JQ_OUTPUT=`jq \
  --arg NAME "@$GITHUB_REPOSITORY" \
  --arg AUTHOR_NAME "$GITHUB_REPOSITORY_OWNER" \
  --arg URL "https://github.com/$GITHUB_REPOSITORY_OWNER" \
  --arg GIT "https://github.com/$GITHUB_REPOSITORY.git" \
  '.name = $NAME | .description = "" | .author |= ( .name = $AUTHOR_NAME | .url = $URL ) | .maintainers = "" | .version = "0.1.0" | .repository |= ( .type = "git" | .url = $GIT )' \
  package.json
`

# Overwrite package.json
echo "$JQ_OUTPUT" > package.json
