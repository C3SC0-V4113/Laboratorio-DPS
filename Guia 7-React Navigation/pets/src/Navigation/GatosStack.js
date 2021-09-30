import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Gato from '../screens/Gatos';

const Stack = createStackNavigator();
export default function GatosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="gato-stack"
        component={Gato}
        options={{title: 'Gato'}}
      />
    </Stack.Navigator>
  );
}
