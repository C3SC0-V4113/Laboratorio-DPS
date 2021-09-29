import React from 'react';
import {View, Text, Button} from 'react-native';
import Lista from '../Components/lista';
export default function Gato(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en Gato!</Text>
      <Lista></Lista>
      <Button
        title="Ir a Perros"
        onPress={() => navigation.navigate('perro')}></Button>
    </View>
  );
}
