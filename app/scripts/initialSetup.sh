#!/bin/bash

cd ..

echo 'Installing dependencies...'
yarn
bundle

echo 'Nice, now lets do the native dependencies 😳'
yarn install:pods

echo 'Cool, lets try build this thing 🤓'

yarn react-native run-ios

echo 'Awesome, almost there. Run the metro server and you should be cooking with gas:'
echo 'yarn start'
