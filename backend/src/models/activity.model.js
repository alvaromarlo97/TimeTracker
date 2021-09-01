const { model, Schema } = require('mongoose');

const activitiesSchema = Schema({
  activityName: String,
  activityTime: [
    {
      time: Number,
      date: { type: Date, default: new Date() },
    }],
  challenge: [{ name: String, done: Boolean }],
  color: String,
});
module.exports = model('Activities', activitiesSchema);
