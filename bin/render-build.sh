#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix  && npm run build --prefix 
cp -a app/assets/builds/. public/
bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:create
bundle exec rails db:migrate