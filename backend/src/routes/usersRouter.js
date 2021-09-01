const express = require('express');
const usersController = require('../controllers/usersControllers');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(usersController.getUsers)
  .post(usersController.createUser);

userRouter
  .route('/:userId')
  .get(usersController.getOneUserById)
  .delete(usersController.deleteOneUserById)
  .put(usersController.updateOneUserById);

module.exports = userRouter;
