const express = require('express');
const passport = require('passport');

const activityController = require('../controllers/activitiesControllers');

const activityRouter = express.Router();

activityRouter
  .route('/')
  .post(activityController.createOne)
  .all(passport.authenticate('jwt', { session: false }))
  .get(activityController.getAll);

activityRouter
  .route('/:activity')
  .get(activityController.getOneById)
  .put(activityController.putUpdate)
  .all(passport.authenticate('jwt', { session: false }))
  .delete(activityController.deleteActivity);

module.exports = activityRouter;
