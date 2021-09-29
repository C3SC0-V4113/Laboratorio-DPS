import React from 'react';
import {View, Text, Button} from 'react-native';
import Lista from '../Components/lista';

const perros=[
    {
      name: 'Amy Farwoof',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice Dog',
    },
    {
      name: 'Chris Wauffckson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
  ];

export default function Perro() {
  return (
    <View>
      <Text>Estamos en Perro</Text>
      <Lista list={perros}/>
    </View>
  );
}
