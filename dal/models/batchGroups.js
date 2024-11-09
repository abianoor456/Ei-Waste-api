const mongoose = require('mongoose');

const batchGroupSchema = new mongoose.Schema({
  average_final_product_weight: {
    type: Number,
    required: true
  },
  population_size: {
    type: Number,
    required: true
  },
  number_of_samples: {
    type: Number,
    required: true
  },
  sample_weights: {
    type: [Number], 
    required: true
  },
  expiry_date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true 
});

const BatchGroup = mongoose.model('BatchGroup', batchGroupSchema);

module.exports = BatchGroup;
