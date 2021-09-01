import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {
  const {calculate} = props;
  return (
    <View style={styles.Footer}>
      <TouchableOpacity style={styles.Boton} onPress={calculate}>
        <Text style={styles.Texto}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Footer: {
    backgroundColor: colors.BACKGROUND_PRINCIPAL,
    padding: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
  },
  Boton: {
      margin: 'auto',
    width: '100%',
    padding: 25,
    backgroundColor: colors.BACKGROUND_DARKER,
    borderRadius: 15,
  },
  Texto: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.FONT_COLOR,
    textAlign: 'center',
  },
});
