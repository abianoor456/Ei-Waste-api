const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  capacity_units: {
    type: String,
    required: true
  }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
