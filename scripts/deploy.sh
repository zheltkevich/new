#!/usr/bin/env sh

# abort on errors
set -e

git checkout --orphan production
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m production
git push origin HEAD:production --force
rm -r dist
git checkout -f master
git branch -D production
