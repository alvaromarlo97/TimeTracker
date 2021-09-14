const {
  getAll, createOne, getOneById, updateOneActivity, deleteActivity, putUpdate, setNewTime,
} = require('./activitiesControllers');
const Activity = require('../models/activity.model');

jest.mock('../models/activity.model');
let req;
let res;

describe('Given a getAll function', () => {
  describe('When it is triggered', () => {
    describe('And find is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { query: {} };
        res = { json: jest.fn() };
        Activity.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([]),
          }),
        });

        await getAll(req, res);

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
        Activity.find.mockRejectedValue();
        await getAll(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
describe('Given a createOne function', () => {
  describe('When it is triggered', () => {
    describe('And create is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { body: {} };
        res = { json: jest.fn() };
        Activity.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([]),
          }),
        });

        await createOne(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And create is rejected', () => {
      test('then call rejected', async () => {
        req = { body: {} };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        Activity.find.mockRejectedValue();
        await createOne(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a getOneById function', () => {
  describe('When it is triggered', () => {
    describe('And findById is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { activity: {} } };
        res = { json: jest.fn() };
        Activity.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([]),
          }),
        });

        await getOneById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findById is rejected', () => {
      test('then call rejected', async () => {
        req = { body: {} };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        Activity.find.mockRejectedValue();
        await getOneById(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
      });
    });
  });
});

describe('Given a updateOneActivity function', () => {
  describe('When it is triggered', () => {
    describe('And findByIdAndUpdate is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { activity: {} }, body: { data: {} } };
        res = { json: jest.fn() };
        Activity.find.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue([]),
          }),
        });

        await updateOneActivity(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findByIdAndUpdate is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { activity: {} }, body: { data: {} } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        Activity.find.mockRejectedValue();
        await updateOneActivity(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a deleteActivity function', () => {
  describe('When it is triggered', () => {
    describe('And findByIdAndDelete is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { activity: {} } };
        res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
        Activity.findByIdAndDelete.mockReturnValue({});

        await deleteActivity(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And findByIdAndDelete is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { activity: {} } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        Activity.findByIdAndDelete.mockRejectedValue();
        await deleteActivity(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
      });
    });
  });
});

describe('Given a setNewTime function', () => {
  describe('When it is triggered', () => {
    describe('And findById is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { activity: {} }, body: { data: {} } };
        res = { json: jest.fn(), status: jest.fn(), send: jest.fn() };
        Activity.findById.mockReturnValue({
          activityTime: [],
          save: jest.fn(),
        });
        await setNewTime(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findById is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { activity: {} }, body: { data: {} } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        Activity.find.mockRejectedValue();
        await setNewTime(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a putUpdate function', () => {
  describe('When it is triggered', () => {
    describe('And findById is resolved', () => {
      test('Then res.json should be called', async () => {
        req = { params: { activity: {} }, body: { data: {}, type: 'timeUpdate' } };
        res = {
          send: jest.fn(),
          json: jest.fn(),
        };
        await putUpdate(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findById is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { activity: {} }, body: { data: {}, type: 'activityUpdate' } };
        res = {
          send: jest.fn(),
          json: jest.fn(),
        };
        await putUpdate(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And findById is rejected', () => {
      test('then call rejected', async () => {
        req = { params: { activity: {} }, body: { data: {}, type: 'act' } };
        res = {
          send: jest.fn(),
          status: jest.fn(),
        };
        await putUpdate(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
