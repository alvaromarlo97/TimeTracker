const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  password: String,
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activities' }],

});
function isValidPassword(password) {
  return password === this.password;
}
userSchema.methods.isValidPassword = isValidPassword;
module.exports = model('User', userSchema);
