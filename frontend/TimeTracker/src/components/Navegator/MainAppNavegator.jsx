import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activities from '../Activities/Activities';
import MyTimer from '../Crono/Crono';

export default function MainAppNavegator() {
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator>

      <Tab.Screen
        name="Activities"
        component={Activities}
      />
      <Tab.Screen
        name="MyTimer"
        component={MyTimer}
      />
    </Tab.Navigator>

  );
}
