/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const {
  registerUser, logOut, logIn, createRefreshToken,
} = require('../controllers/authControllers');

const router = new Router();
router.post(
  '/register',
  passport.authenticate('singup', { session: false }),
  registerUser,
);
router.post(
  '/login',
  passport.authenticate('login', { session: false }),
  logIn,
);
router.post(
  '/refreshToken',
  createRefreshToken,
);
router.post(
  '/logout',
  logOut,
);
module.exports = router;
