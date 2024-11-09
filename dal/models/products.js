const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id_no:{
    type: String,
    required: true
  },
  accepted_weight_deviation: {
    type: String,
    required: true
  },
  accepted_weight_deviation_unit: {
    type: String,
    required: true
  },
  accepted_time_deviation: {
    type: String,
    required: true
  },
  accepted_time_deviation_unit: {
    type: String,
    required: true
  },
  package_ideal_weight: {
    type: String,
    required: true
  },
  package_unit_ideal_weight: {
    type: String,
    required: true
  },
  package_units: {
    type: String,
    required: true
  },
  measurement_unit: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
