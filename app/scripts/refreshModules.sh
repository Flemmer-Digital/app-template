#!/bin/bash

cd ..
rm -rf ./node_modules
rm yarn.lock

cd ios
# pod deintegrate
rm Podfile.lock
rm -rf ./Pods

cd ..
yarn
yarn install:pods
