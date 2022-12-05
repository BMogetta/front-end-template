#!/usr/bin/env bash

# https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# Define the input vars
GITHUB_REPOSITORY=${1?Error: Please pass username/repo, e.g. BMogetta/front-end-template}
GITHUB_REPOSITORY_OWNER=${2?Error: Please pass username, e.g. BMogetta}

echo "GITHUB_REPOSITORY: $GITHUB_REPOSITORY"
echo "GITHUB_REPOSITORY_OWNER: $GITHUB_REPOSITORY_OWNER"

GH_URL="https://github.com/$GITHUB_REPOSITORY_OWNER"
EMAIL_LINE="please report it to us at <$GH_URL>. We will work with you to"

sed -i "s|FRONT-END-TEMPLATE|$GITHUB_REPOSITORY|" SECURITY.md
sed -i "8s|.*|$EMAIL_LINE|" SECURITY.md