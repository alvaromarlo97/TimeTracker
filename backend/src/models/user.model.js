const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  password: String,
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activities' }],

});
module.exports = model('User', userSchema);
