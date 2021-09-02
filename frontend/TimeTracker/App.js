/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';

import Login from './src/components/Login/Login';
import MyTimer from './src/components/Main/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Login} />
          <Stack.Screen name="Clock" component={MyTimer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
