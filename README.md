# app-template

### How to use this template
To use this template there is some config required. Be warned if you don't follow the 'Setup' steps in this readme, you will feel the pain...

#### Setup: Getting Started
1. Clone the repo
2. `sh addPreCommits.sh`
3. `sh initialSetup.sh` (might take a couple of attempts) 
4. `yarn start`

### Setup: Sentry
Create a new project in sentry.
Set up in index.js (docs)[https://docs.sentry.io/platforms/react-native/]
run
`npx @sentry/wizard -i reactNative -p ios android`
then run:
`yarn install:pods`

### Setup: Linking to the Rails api
Once the rails app is hosted somehwere, change the url in buildApiUrl.ts to the hosting url.

### Native Modules
1. react-native-restart
2. react-native-app-auth
3. react-native-keychain
4. @react-navigation
5. react-native-gesture-handler
6. react-native-safe-area-context
7. react-native-screens

### Testing
1. Unit Test: `yarn test`
2. Integration tests with Detox:
`yarn react-native run-ios`
`yarn start`
`yarn detox build`
`yarn detox test`

### Commands
yarn createComp `componentName` - Creates files for component, styles and test in the `src/components` directory

## Building The App
### Ios
- ios: 12.0 (podfile and Xcode)
- use .xcworkspace
- Enable full disk access via System Preferences => Privacy
- Force compile to swift by creating empty swift file in ios folder???

#### Common Errors:
'Target Integrity': fix all (need to do this after every refresh of pods)
RCT-Folly (semantic issues): comment out `typedef uint8_t clockid_t` (need to do this after every refresh of pods)
<React/**.h> file not found: in Xcode => Product => manage schemes => Find React in list and move above app

### Android

Follow (this)[https://reactnative.dev/docs/environment-setup] guide

in your .zshrc file add the following config:

```
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

run_android() {
  cd ~/Documents/flemmer-digital-tech/templates/app-template/app && adb -s emulator-5554  reverse tcp:3000 tcp:3000 && yarn react-native run-android
}
```

then to run android do `run_android`