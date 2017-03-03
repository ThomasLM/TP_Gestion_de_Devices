const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const devicesSchema = new Schema({
  name: {type: String, required: true},
  state: {type: Boolean},
  groups: {type: ObjectId, ref: 'Group'}
});

module.exports = {
  schema: devicesSchema,
  model: mongoose.model('Device', devicesSchema),
  registry: {
    urlTemplates: {
      self: 'http://127.0.0.1:3000/api/devices/{id}',
      relationship: 'http://127.0.0.1:3000/api/devices/{ownerId}/' +
      'relationships/{path}'
    }
  }
};
