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
  ScrollView,
} from 'react-native';
/*import App from './App';*/
import {name as appName} from './app.json';
import {
  Card,
  ListItem,
  Button,
  Icon,
  ThemeProvider,
} from 'react-native-elements';

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

const users = [
  {
    id: 1,
    nombre: 'Pupusas',
    src: require('./src/imgs/pupusas.jpg'),
    ingredientes: ['Queso', 'Frijoles', 'Masa de Maíz', 'Salsa'],
  },
  {
    id: 2,
    nombre: 'Elotes Locos',
    src: require('./src/imgs/elotes.jpg'),
    ingredientes: [
      'Elote',
      'Queso rayado',
      'Ketchup',
      'Mostaza',
      'Mayonesa',
      'Salsa Negra',
    ],
  },
  {
    id: 3,
    nombre: 'Nuegados de Yuca',
    src: require('./src/imgs/nuegados.jpg'),
    ingredientes: ['Yuca Molida', 'Queso Rayado', 'Huevos', 'Polvo de Hornear'],
  },
  {
    id: 4,
    nombre: 'Tamales de Pollo',
    src: require('./src/imgs/tamales.jpg'),
    ingredientes: [
      'Pollo',
      'Tomate',
      'Zanahora',
      'Papas',
      'Masa de Maiz',
      'Chiles Dulces',
      'Cebolla',
    ],
  },
  {
    id: 5,
    nombre: 'Yuca Frita/Salcochada',
    src: require('./src/imgs/yuca.jpg'),
    ingredientes: [
      'Yuca',
      'Ajo',
      'Tomate',
      'Salsa',
      'Curtido',
      'Chicharrón',
      'Pepescas',
    ],
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ThemeProvider>
          {users.map((u, i) => {
            return (
              <Card key={u.id} style={styles.container}>
                <Card.Title style={styles.title}>{u.nombre}</Card.Title>
                <Card.Divider />
                <View>
                  <View style={styles.item}>
                    <Image style={styles.img} source={u.src} />
                  </View>

                  {u.ingredientes.map((ingre, id) => {
                    return (
                      <View key={id}>
                        <ListItem bottomDivider>
                          <ListItem.Content>
                            <ListItem.Title>
                              <Text>{ingre}</Text>
                            </ListItem.Title>
                          </ListItem.Content>
                        </ListItem>
                      </View>
                    );
                  })}
                </View>
              </Card>
            );
          })}
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 125,
    borderWidth: 2,
    resizeMode: 'contain',
    margin: 8,
  },
});

AppRegistry.registerComponent(appName, () => App);
