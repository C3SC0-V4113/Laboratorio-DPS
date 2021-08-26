/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

AppRegistry.registerComponent(appName, () => App);
