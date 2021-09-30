import React from 'react';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ContactStack from './ContactStack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={({route})=>({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'contact') {
          iconName = focused ? 'navicon' : 'navicon';
        } else if (route.name === 'about') {
          iconName = focused ? 'user' : 'user';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
      <Tab.Screen
        name="about"
        component={AboutStack}
        options={{title: 'About'}}
      />
    </Tab.Navigator>
  );
}
