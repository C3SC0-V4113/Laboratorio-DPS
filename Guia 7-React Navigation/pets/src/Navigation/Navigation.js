import React from 'react';
import GatosStack from './GatosStack';
import PerrosStack from './PerrosStack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'perro') {
            iconName = focused ? 'dog' : 'dog';
          } else if (route.name === 'gato') {
            iconName = focused ? 'cat' : 'cat';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="gato"
        component={GatosStack}
        options={{title: 'Gatos'}}
      />
      <Tab.Screen
        name="perro"
        component={PerrosStack}
        options={{title: 'Perros'}}
      />
    </Tab.Navigator>
  );
}
