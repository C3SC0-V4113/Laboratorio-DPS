import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';

const Lista=({list})=> {
  return (
    <Card containerStyle={{padding: 0}}>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{uri: l.avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </Card>
  );
}

export default Lista;
