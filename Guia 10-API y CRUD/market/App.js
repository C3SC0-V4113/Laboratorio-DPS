import React, {useState, Component, useEffect} from 'react';
import {
  SafeAreaView,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
//import {createAppContainer, NavigationEvents} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import PantallaInicio from './src/Navigation/PantallaInicio';
import listarProductos from './src/Navigation/listarProductos';
import PaginaAgregar from './src/Navigation/PaginaAgregar';
import PaginaDetalle from './src/Navigation/PaginaDetalle';

const Stack = createStackNavigator();
/*{
    Inicio: PantallaInicio,
    ListarProductos: listarProductos,
    Detalles: PaginaDetalle,
    Agregar: PaginaAgregar,
  },
  {
    initialRouteName: 'Inicio',
  },*/

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={PantallaInicio} />
          <Stack.Screen
            name="Productos"
            component={listarProductos}
            options={{
              title: 'Productos',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Detalle"
            component={PaginaDetalle}
            options={{
              title: 'Editar producto',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Agregar"
            component={PaginaAgregar}
            options={{
              title: 'Agregar producto',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
