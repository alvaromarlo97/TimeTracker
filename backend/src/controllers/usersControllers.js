const User = require('../models/user.model');

async function getUsers({ query }, res) {
  try {
    const foundUsers = await User.find(query)
      .populate('activities');

    res.json(foundUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOneUserById({ params: { userId } }, res) {
  try {
    const foundUser = await User.findById(userId)
      .populate('activities');

    if (!foundUser) return res.sendStatus(404);

    return res.json(foundUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}
async function deleteOneUserById({ params: { userId } }, res) {
  try {
    await User.findByIdAndDelete(userId);

    res.send('The user has been deleted');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneUserById({ params: { userId }, body }, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: body },
      { new: true },
    );

    // if (!updatedUser) return res.sendStatus(404);

    return res.json(updatedUser);
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

module.exports = {
  getUsers,
  getOneUserById,
  deleteOneUserById,
  updateOneUserById,
};
