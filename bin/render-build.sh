#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix  && npm run build --prefix 
cp -a ./build /public
bundle install
bundle exec rake db:migrate
bundle exec rails db:seed