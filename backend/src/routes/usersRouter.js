const express = require('express');
const passport = require('passport');
const usersController = require('../controllers/usersControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(usersController.getUsers);

userRouter
  .route('/:userId')
  .all(passport.authenticate('jwt', { session: false }))
  .get(usersController.getOneUserById)
  .delete(usersController.deleteOneUserById)
  .put(usersController.updateOneUserById);

module.exports = userRouter;
