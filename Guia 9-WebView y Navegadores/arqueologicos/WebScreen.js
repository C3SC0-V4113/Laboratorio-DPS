import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
export default class WebScreen extends React.Component {
  sitio = this.props.navigation.getParam('sitio');
  lugares = {
    sanandres:
      'https://www.google.com/maps/place/Sitio+Arqueol%C3%B3gico+San+Andr%C3%A9s/@13.7962141,-89.3907935,15.81z/data=!4m5!3m4!1s0x8f63274327e121c5:0x3358c8e490976ea6!8m2!3d13.7971967!4d-89.3904928',
    joyaceren:
      'https://www.google.com/maps/place/Joya+de+Ceren/@13.8212866,-89.3642815,16z/data=!3m1!4b1!4m5!3m4!1s0x8f63212ab199a6dd:0x51207fe999d8c593!8m2!3d13.8222445!4d-89.3594449',
    casablanca:
      'https://www.google.com/maps/place/Sitio+Arqueol%C3%B3gico+de+Casa+Blanca/@13.9879619,-89.6712439,15z/data=!4m2!3m1!1s0x0:0x221b7a610c4529d0?sa=X&ved=2ahUKEwim2evgq77oAhXSct8KHQM2C7UQ_BIwFXoECBoQCA',
  };
  render() {
    console.log(this['lugares'][this.sitio]);
    return (
      <WebView
        style={styles.webSize}
        source={{uri: this['lugares'][this.sitio]}}></WebView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webSize: {
    width: '100%',
    height: '100%',
  },
});
