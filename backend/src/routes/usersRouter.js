const express = require('express');
const passport = require('passport');
const usersController = require('../controllers/usersControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(usersController.getUsers);

userRouter
  .route('/:userId')
  .put(usersController.updateOneUserById)
  .get(usersController.getOneUserById)
  .all(passport.authenticate('jwt', { session: false }))
  .delete(usersController.deleteOneUserById);

module.exports = userRouter;
