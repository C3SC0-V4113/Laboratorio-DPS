import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import listarProductos from '../Screens/listarProductos';
import PaginaAgregar from '../Screens/PaginaAgregar';
import PaginaDetalle from '../Screens/PaginaDetalle';
import PantallaInicio from '../Screens/PantallaInicio';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={PantallaInicio}
        options={{
          headerShown: false,
        }}
      />
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
  );
}
