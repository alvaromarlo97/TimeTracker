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

async function updateOneActivity(req, res) {
  const { activity } = req.params;
  const dataToUpdate = req.body;
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      activity,
      dataToUpdate,
      { new: true },
    );
    return res.json(updatedActivity);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}
async function deleteActivity({ activity }, res) {
  try {
    const { _id } = activity;
    await Activity.findByIdAndDelete(_id);
    res.send('The activity has been deleted');
  } catch (error) {
    res.status(404);
    res.send(new Error('There is no activity'));
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneActivity,
  deleteActivity,

};
