const mongoose = require('mongoose');
const {Permissions} = require('../../utils/enums')

const roleSchema = new mongoose.Schema({
  role_name: {
    type: String,
    required: true
  },
  permissions: [
    {
      type: String,
      enum: Object.values(Permissions),
      required: true
    }
  ]
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
