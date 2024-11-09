const mongoose = require('mongoose');
const { Status } = require('../../utils/enums');

const cookingSchema = new mongoose.Schema({
  batch_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Batch',
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
  },
  predicted_ETA: {
    type: Date,
  },
  status: {
    type: String,
    default: Status.IN_PROGRESS ,
    enum: Object.values(Status)
  },
  rejection_reason: {
    type: String,
    required: function() { return this.status=== Status.REJECTED; }
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Cooking = mongoose.model('Cooking', cookingSchema);

module.exports = Cooking;
