const {
  getUsers, deleteOneUserActivityById, getOneUserById, updateOneUserById,
} = require('./usersControllers');
const User = require('../models/user.model');

jest.mock('../models/user.model');
let req;
let res;

describe('Given a getUsers function', () => {
  describe('When it is triggered', () => {
    describe('And find is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { query: {} };
        res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
        User.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({}),
        });

        await getUsers(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And find is rejected', () => {
      test('then call rejected', async () => {
        req = { query: {} };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        User.find.mockRejectedValue();
        await getUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a getOneUserById function', () => {
  describe('When it is triggered', () => {
    describe('And findById is resolved', () => {
      test('And there is no user with that id', async () => {
        req = { params: { userId: {} } };
        res = {
          json: jest.fn(), status: jest.fn(), send: jest.fn(), sendStatus: jest.fn(),
        };
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue(null),
        });

        await getOneUserById(req, res);

        expect(res.sendStatus).toHaveBeenCalledWith(404);
      });
      test('Then res.json should be called', async () => {
        req = { params: { userId: {} } };
        res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({}),
        });

        await getOneUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findById is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { userId: {} } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        User.find.mockRejectedValue();
        await getOneUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a deleteOneUserById function', () => {
  describe('When it is triggered', () => {
    describe('And findByIdAndDelete is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { userId: {} } };
        res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
        User.findByIdAndDelete.mockReturnValue({});

        await deleteOneUserActivityById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findByIdAndDelete is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { userId: {} } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        User.findByIdAndUpdate.mockRejectedValue();
        await deleteOneUserActivityById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a updateOneUserById function', () => {
  describe('When it is triggered', () => {
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { userId: {} }, body: {} };
        res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
        User.findByIdAndUpdate.mockReturnValue({});

        await updateOneUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findByIdAndUpdate is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { userId: {} } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        User.findByIdAndDelete.mockRejectedValue();
        await updateOneUserById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
