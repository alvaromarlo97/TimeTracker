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
// import Navegator from './src/components/Navegator/Navegator';
import configureStore from './src/redux/store';
import Background from './src/components/Moment/Moment';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <Background />
    </Provider>
  );
}
