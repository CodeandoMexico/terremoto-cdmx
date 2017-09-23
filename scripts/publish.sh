#!/usr/bin/env bash

git add --force _site
git commit -m "Release `date '+%Y-%m-%d %H:%M'`"
git subtree push --squash --prefix  _site/ origin gh-pages
