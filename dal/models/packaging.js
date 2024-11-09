const mongoose = require('mongoose');
const { Status } = require('../../utils/enums');

const packagingSchema = new mongoose.Schema({
  batch_group_id:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BatchGroup',
    required: true
  },
  batch_group_expected_output: {
    type: Number,
    required: true
  },
  batch_group_actual_output: {
    type: Number,
    required: true
  },
  batch_group_date_in: {
    type: Date,
    required: true
  },
  batch_group_date_out: {
    type: Date,
    required: true
  },
  predicted_yield: {
    type: Number,
    required: true
  },
  predicted_ETA: {
    type: Date,
    required: true
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

const Packaging = mongoose.model('Packaging', packagingSchema);

module.exports = Packaging;
