const mongoose = require('mongoose');
const {Status, StorageRejectionReasons} = require('../../utils/enums')

const storageSchema = new mongoose.Schema({
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
    required: function() { return this.status=== Status.REJECTED; },
    enum: Object.values(StorageRejectionReasons)
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Storage = mongoose.model('Storage', storageSchema);

module.exports = Storage;
