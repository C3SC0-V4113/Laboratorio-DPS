import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
/*import App from './App';*/
import {name as appName} from './app.json';
import {Card} from 'react-native-elements/dist/card/Card';
//import {Card, ListItem, Button, Icon} from 'react-native-elements';

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

const users = [
  {
    id: '1',
    name: 'brynn',
    src:require('./src/imgs/pupusas.jpg'),
  },
  {
    id: '2',
    name: 'cesco',
    src:require('./src/imgs/elotes.jpg'),
  },
];

const Item = ({name,img}) => (
  <View style={styles.item}>

      <Image
        style={styles.image}
        source={img}
      />
      <Text style={styles.name}>{name}</Text>
    
  </View>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item name={item.name} img={item.src} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
  item:{
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  name:{
    fontSize: 32,
    color:'black',
  },
  image:{
    width: 200,
    height: 125,
    resizeMode:'contain',
    borderWidth: 2,
    borderColor: '#d35647',
    margin: 8,
  },
});

AppRegistry.registerComponent(appName, () => App);
