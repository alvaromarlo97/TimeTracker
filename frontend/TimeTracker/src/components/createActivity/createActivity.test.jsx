import React from 'react';
import { render } from '../../../utils/testUtils/test.utils';
import CreateActivity from './CreateActivity';

const navigation = {
  navigate: jest.fn(),
};

describe('Given a Character Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<CreateActivity navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
