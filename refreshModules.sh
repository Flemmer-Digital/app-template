#!/bin/bash

cd app
rm -rf ./node_modules
rm yarn.lock

cd ios
rm Podfile.lock
rm -rf ./Pods

cd ..
yarn
yarn install:pods
