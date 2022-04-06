#!/bin/bash

watchman watch-del-all

find ./*/node_modules -type l -delete

yarn install --check-files
