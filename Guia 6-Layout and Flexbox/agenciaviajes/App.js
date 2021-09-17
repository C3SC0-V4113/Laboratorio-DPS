/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

import React from 'react';
import {View, StyleSheet} from 'react-native';
const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'column',
  },
  caja1: {
    padding: 20,
    backgroundColor: 'navy',
  },
  caja2: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  caja3: {
    padding: 20,
    backgroundColor: 'green',
  },
  caja4: {
    padding: 20,
    backgroundColor: 'teal',
  },
});
export default App;
