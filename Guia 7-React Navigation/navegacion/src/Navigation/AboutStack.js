import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator();
export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="about-stack" component={About} options={{title: 'About'}} />
    </Stack.Navigator>
  );
}