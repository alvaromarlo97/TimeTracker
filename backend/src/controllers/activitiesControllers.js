const Activity = require('../models/activity.model');

async function getAll({ query }, res) {
  try {
    const activities = await Activity.find(query);
    res.json(activities);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createOne({ body }, res) {
  try {
    const createdActivity = await Activity.create(body);
    res.json(createdActivity);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneById({ params }, res) {
  try {
    const { activity } = params;
    const foundActivity = await Activity.findById(activity);
    return res.json(foundActivity);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no activity with this id'));
  }
}

async function updateOneById(req, res) {
  try {
    res.send('updateOneById works');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneById,

};
