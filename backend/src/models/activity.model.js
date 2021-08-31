const { model, Schema } = require('mongoose');

const activitiesSchema = Schema({
  activityName: String,
  activityTime: [{ time: Number, date: Date }],
  Challenge: [{ name: String, done: Boolean }],
  color: String,
});
module.exports = model('Activities', activitiesSchema);
