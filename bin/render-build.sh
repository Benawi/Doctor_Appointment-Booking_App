#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
# clean
rm -rf public
# build
npm install --prefix  && npm run build --prefix 
# migrate
bundle exec rake db:migrate
# postbuild
cp a app/assets/builds/. public/