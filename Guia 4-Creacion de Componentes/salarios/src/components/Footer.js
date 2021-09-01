import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Footer(props) {
  const {calculate} = props;
  return (
    <View>
      <TouchableOpacity onPress={calculate}>
        <Text>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}