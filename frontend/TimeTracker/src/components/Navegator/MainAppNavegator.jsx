import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activities from '../Activities/Activities';
import MyTimer from '../Crono/Crono';

export default function MainAppNavegator() {
  const [isStarted, setisStarted] = useState(false);

  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator>

      <Tab.Screen
        name="Activities"
        options={{
          headerShown: false,
        }}
        component={Activities}
      />
      <Tab.Screen
        name="MyTimer"
        options={{
          tabBarStyle: isStarted && { display: 'none' },
          headerShown: false,
        }}

      >
        {() => <MyTimer setisStarted={setisStarted} />}
      </Tab.Screen>
    </Tab.Navigator>

  );
}
