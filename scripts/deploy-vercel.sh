#!/usr/bin/env sh

# abort on errors
set -e

git checkout --orphan production
npm run build
git --work-tree add .
git --work-tree commit -m production
git push origin HEAD:production --force
git checkout -f master
git branch -D production
