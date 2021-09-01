/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

let refreshTokens = [];

async function registerUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    return res.json(newUser);
  } catch (error) {
    res.status(404);
    return res.send(new Error('There is no users'));
  }
}
async function logOut({ body: { refreshToken } }, res) {
  refreshTokens = await refreshTokens.filter((current) => current !== refreshToken);
  res.send('Logout successful');
}
async function logIn({ user }, res) {
  const data = { _id: user._id, email: user.email };
  try {
    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '1m' },
    );
    const refreshToken = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
    );
    refreshTokens.push(refreshToken);
    return res.json({
      token,
      refreshToken,
    });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}
async function createRefreshToken({ body: { refreshToken } }, res) {
  if (!refreshToken) {
    return res.sendStatus(401);
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }
  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
    if (err) {
      return res.sendStatus(403);
    }
    const data = { _id: user._id, email: user.email };
    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '1m' },
    );
    return res.json({
      token,
    });
  });
}

module.exports = {
  registerUser,
  logOut,
  logIn,
  createRefreshToken,
};
