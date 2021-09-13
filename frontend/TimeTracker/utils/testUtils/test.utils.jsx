/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import configureStore from '../../src/redux/store';

const AllTheProviders = ({ children }) => (
  <Provider store={configureStore()}>
    { children }
  </Provider>
);

const customRender = (ui, options) => render(ui, {
  wrapper: AllTheProviders,
  ...options,
});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
