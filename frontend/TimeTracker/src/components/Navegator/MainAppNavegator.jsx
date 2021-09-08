import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Activities from '../Activities/Activities';
import MyTimer from '../Moment/Moment';
import ActivityNavegator from './ActivityNavegator';
import Stats from '../Stats/Stats';

export default function MainAppNavegator() {
  const [isStarted, setisStarted] = useState(false);

  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator>

      <Tab.Screen
        name="ActivityNavegator"
        options={{
          headerShown: false,
        }}
        component={ActivityNavegator}
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
      <Tab.Screen
        name="Stats"
        options={{
          headerShown: false,
        }}
        component={Stats}
      />
    </Tab.Navigator>

  );
}
