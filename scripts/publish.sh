#!/usr/bin/env bash

git add --force _site
git commit -m "Release `date '+%Y-%m-%d %H:%M'`"
git br -D gh-pages
git subtree split --prefix _site -b gh-pages
git push -f origin gh-pages:gh-pages
