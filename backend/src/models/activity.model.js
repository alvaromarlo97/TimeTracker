const { model, Schema } = require('mongoose');

const activitiesSchema = Schema({
  activityName: String,
  activityTime: [
    {
      hours: Number,
      minutes: Number,
      seconds: Number,
      date: { type: Date, default: new Date() },
    }],
  color: String,
});
module.exports = model('Activities', activitiesSchema);
