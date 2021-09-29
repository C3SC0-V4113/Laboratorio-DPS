import React from 'react';
import {View, Text, Button} from 'react-native';
import Lista from '../Components/lista';
export default function Perro(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en Perro</Text>
      <Lista></Lista>
      <Button
        title="Ir a Gato"
        onPress={() => navigation.navigate('gato')}></Button>
    </View>
  );
}
