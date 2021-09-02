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
import { Provider } from 'react-redux';
import Login from './src/components/Login/Login';
import configureStore from './src/redux/store';

// import MyTimer from './src/components/Main/Main';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <Login />
    </Provider>
  );
}
