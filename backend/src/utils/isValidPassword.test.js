const { isValidPassword } = require('./isValidPassword');

describe('Given a isValidPassword function', () => {
  describe('When it is triggered', () => {
    test('Then should return password', () => {
      const password = '123';
      isValidPassword(password);
      expect('123');
    });
  });
});
