const { model, Schema } = require('mongoose');
const { isValidPassword } = require('../utils/isValidPassword');

const userSchema = Schema({
  username: String,
  email: String,
  password: String,
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activities' }],

});

userSchema.methods.isValidPassword = isValidPassword;
module.exports = model('User', userSchema);
