# Clean cache
rm -rf $TMPDIR/react-*; rm -rf $TMPDIR/haste-*; rm -rf $TMPDIR/metro-*; watchman watch-del-all

# Open a new tab and Start Metro Bundler directly from the project folder
react-native start  --reset-cache

# Now run `react-native run-android` or `react-native run-ios`

/Users/anatolynosov/Library/Android/sdk/emulator/emulator -avd Nexus_5X_API_28_x86

yarn run metro
react-native run-android

http://localhost:8081/debugger-ui/
