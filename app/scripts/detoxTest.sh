#!/bin/bash

set -euo pipefail

# Ensure that the right simulator exists before running detox
# This should match with the ".devices.simulator.device" options in .detoxrc.json
if [ "$(applesimutils --list --byName 'iPhone 13' --byOS 'iOS 15.4' | jq 'length')" -eq 0 ]; then
  echo "Installing required simulator and creating a device"
  bundle exec xcversion simulators --install="iOS 15.4"
fi

rm -rf artifacts/*

export SIMCTL_CHILD_NSZombieEnabled=1

detox test --retries 2 "$@"