import React from 'react';
import {View, Text} from 'react-native';
import Lista from '../Components/lista';

const gatos=[
    {
      name: 'Amy Farmau',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice Cat',
    },
    {
      name: 'Chris Miauckson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
  ];

export default function Gato() {
  return (
    <View>
      <Text>Estamos en Gato!</Text>
      <Lista list={gatos}/>
    </View>
  );
}
