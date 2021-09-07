import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Activities from '../Activities/Activities';
import CreateActivity from '../createActivity/CreateActivity';

export default function ActivityNavegator() {
  const Stack = createNativeStackNavigator();
  return (

    <Stack.Navigator
      initialRouteName="Activities"
    >

      <Stack.Screen
        name="Activities"
        options={{
          headerShown: false,
        }}
        component={Activities}
      />
      <Stack.Screen
        name="CreateAct"
        options={{
          headerShown: false,
        }}
        component={CreateActivity}
      />
    </Stack.Navigator>

  );
}
