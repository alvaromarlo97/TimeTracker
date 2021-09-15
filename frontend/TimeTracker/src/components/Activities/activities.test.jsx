import React from 'react';
import { render } from '../../../utils/testUtils/test.utils';
import Activities from './Activities';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Character Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Activities navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
