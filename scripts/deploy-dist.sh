#!/usr/bin/env sh

# abort on errors
set -e

git checkout --orphan dist
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m dist
git push origin HEAD:dist --force
rm -r dist
git checkout -f master
git branch -D dist
