#!/usr/bin/env bash

git checkout -B tmp
rm -rf _site
bundle exec jekyll build
cp CNAME _site
