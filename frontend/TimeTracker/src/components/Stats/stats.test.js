import React from 'react';
import { View } from 'react-native';
import { render } from '../../../utils/testUtils/test.utils';
import Stats from './Stats';

const navigation = {
  navigate: jest.fn(),
};
jest.mock('victory-native', () => ({
  VictoryPie: jest.fn().mockReturnValue(View),
}));
describe('Given a Character Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Stats navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
