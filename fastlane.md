### Fastlane Documentation

## iOS

### Install

1. Fastlane init
2.

### Signing

Use Match

### Running

Use fastlane beta to build and distribute to app store

## Android

### Install

1. Fastlane init

### Signing

1. [Create Key.json](https://docs.fastlane.tools/getting-started/android/setup/#collect-your-google-credentials) and store in android

### Running

Use fastlane beta to build and distribute to app store

## Debugging

### Package Not Found (Android)

1. Make sure to upload at least 1 build of the app to google play
2. Change package name in AppFile to match the one displayed in Google Play Console

### APK specifies a version code that has already been used (Android)

1. Increment Android build number using the [this](https://medium.com/@atul.dc/increment-build-number-using-fastlane-c12b4b886ea3)

### Only releases with status draft may be created on draft app

```
upload_to_play_store(
  ...
  release_status: 'draft'
)
```

### Cannot run program "node" (Android)

1. Close android studio
2. run `open -a /Applications/Android\ Studio.app`
3. reopen android studio

### requires JDK11 or higher (Android)

1. Android Studio -> Preferences -> Build, Execution & Development -> Gradle -> Dropdown -> 16 version -> **Apply** -> File -> Gradle Sync
