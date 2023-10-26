#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a app/assets/builds/. ../../../public
bundle install
bundle exec rake db:migrate
bundle exec rails db:seed