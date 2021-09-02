const express = require('express');
const passport = require('passport');

const activityController = require('../controllers/activitiesControllers');

const activityRouter = express.Router();

activityRouter
  .route('/')
  .all(passport.authenticate('jwt', { session: false }))
  .get(activityController.getAll)
  .post(activityController.createOne);

activityRouter
  .route('/:activity')
  .all(passport.authenticate('jwt', { session: false }))
  .get(activityController.getOneById)
  .put(activityController.putUpdate)
  .delete(activityController.deleteActivity);

module.exports = activityRouter;
