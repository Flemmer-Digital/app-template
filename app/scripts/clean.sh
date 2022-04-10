#!/bin/bash

cd ..

# rm -rf ./node_modules
# cd app yarn

# rm -rf ./ios/Pods
# yarn install:pods


watchman watch-del-all

find ./*/node_modules -type l -delete

yarn install --check-files
