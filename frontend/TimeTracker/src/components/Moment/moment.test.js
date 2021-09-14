import React from 'react';
import { render } from '../../../utils/testUtils/test.utils';
import Moment from './Moment';

const navigation = {
  navigate: jest.fn(),
};
jest.mock('react-native-background-timer', () => ({
  stopBackgroundTimer: jest.fn(),
}));
describe('Given a Character Component', () => {
  describe('When it is rendered', () => {
    let screen;
    beforeEach(() => {
      screen = render(<Moment navigation={navigation} />);
    });
    test('Then screen should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
