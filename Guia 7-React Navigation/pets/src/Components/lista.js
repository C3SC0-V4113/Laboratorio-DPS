import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];

export default function Lista() {
  return (
    <Card containerStyle={{padding: 0}}>
      {users.map((u, i) => (
        <ListItem key={i} />
      ))}
    </Card>
  );
}
