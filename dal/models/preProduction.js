const mongoose = require('mongoose');

const preProductionSchema = new mongoose.Schema({
  batch_id: {
    type: String,
    required: true
  },
  batch_weight_in: {
    type: Number,
    required: true
  },
  batch_weight_out: {
    type: Number,
    required: true
  },
  batch_date_in: {
    type: Date,
    required: true
  },
  batch_date_out: {
    type: Date,
    required: true
  },
  predicted_yield: {
    type: Number,
    required: true
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const PreProduction = mongoose.model('PreProduction', preProductionSchema);

module.exports = PreProduction;
