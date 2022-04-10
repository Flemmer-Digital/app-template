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


## Getting Started

1. Clone the repo
2. `sh initialSetup.sh` (might take a couple of attempts) 
3. `yarn start`


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

