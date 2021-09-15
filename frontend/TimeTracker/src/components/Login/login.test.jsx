import React from 'react';
import { render } from '../../../utils/testUtils/test.utils';
import Login from './Login';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Character Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Login navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
