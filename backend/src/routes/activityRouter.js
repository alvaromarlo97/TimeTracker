const express = require('express');
const activityController = require('../controllers/activitiesControllers');

const activityRouter = express.Router();

activityRouter
  .route('/')
  .get(activityController.getAll)
  .post(activityController.createOne);

activityRouter
  .route('/:activity')
  .get(activityController.getOneById)
  .put(activityController.putUpdate)
  .delete(activityController.deleteActivity);

module.exports = activityRouter;
