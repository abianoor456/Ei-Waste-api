const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  batch_number: {
    type: String,
    required: true
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
