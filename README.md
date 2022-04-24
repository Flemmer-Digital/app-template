# app-template

## To Do
### Authentication:
- NativeOauthConfig.ts
- UseAuthentication
- Navigation
- Add graphql
- Testing
- Api Integration

### CI/CD
- build before merging into master

### Error Logger (sentry?)

## Packages

### Authentication
1. react-native-app-auth
2. react-native-keychain

### Utility
1. date-fns
2. react-native-restart
3. lodash

### Testing
1. (Jest)[https://jestjs.io/]
2. (Jest Native)[https://testing-library.com/docs/ecosystem-jest-native/]
3. (React Hooks)[https://react-hooks-testing-library.com/]

### Commands
yarn createComp `componentName` - Creates files for component, styles and test in the `src/components` directory

## Getting Started

1. Clone the repo
2. `sh addPreCommits.sh`
3. `sh initialSetup.sh` (might take a couple of attempts) 
4. `yarn start`

### Authentication

### Sentry
Create a new project in sentry.
Set up in index.js (docs)[https://docs.sentry.io/platforms/react-native/]
run
`npx @sentry/wizard -i reactNative -p ios android`
then run:
`yarn install:pods`

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
  cd ~/Documents/flemmer-digital-tech/templates/app-template/app && adb -s emulator-5554  reverse tcp:3000 tcp:3000 && yarn react-native run-android --appIdSuffix debug
}
```