/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 import { WebView } from 'react-native-webview';

export default function App(){
  return <WebView source={{ uri: 'file:///android_asset/holamundo.html' }} />;
}
