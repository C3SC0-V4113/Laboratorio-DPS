import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Perro from '../screens/Perros';

const Stack = createStackNavigator();
export default function PerrosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="perro-stack"
        component={Perro}
        options={{title: 'Perro'}}
      />
    </Stack.Navigator>
  );
}
