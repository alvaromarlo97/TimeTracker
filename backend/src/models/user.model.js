const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  password: String,

});
module.exports = model('User', userSchema);
