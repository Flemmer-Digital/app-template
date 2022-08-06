### Fastlane Documentation

## iOS

1. Create app icon and add to app
2. Change App package name in xcode (e.g com.flemmerdigital.apptemplate)

### Install

[Guide](https://thecodingmachine.github.io/react-native-boilerplate/docs/BetaBuild/#setting-up)

1. Fastlane init

### Signing

1. Open Xcode
2. Disable Automatic Signing
3. Run fastlane match init
4. Provide url of key repo (https://github.com/Oli-Flemmer/ideal-dollop)
5. Enter passphrase
6. Change Xcode signing to be match Appstore
7. add match(type: "appstore") to beta lane

result:

```ruby
desc "Push a new beta build to TestFlight"
lane :beta do
  match(type: "appstore")
  increment_build_number(xcodeproj: "app.xcodeproj")
  build_app(workspace: "app.xcworkspace", scheme: "app")
  upload_to_testflight
end
```

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

```ruby
upload_to_play_store(
  ...
  release_status: 'draft'
)

```

### iOS Match Issues

Usually running `fastlane match nuke distribution/development` followed by fastlane match appstore
will fix the issue

```

```
