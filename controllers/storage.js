const Storage = require('../dal/models/storage');
const Product = require('../dal/models/products');
const moment = require('moment');
const { Status } = require('../utils/enums');

const getBatchesByStatusAndDate = async (req, res) => {
  try {
    const { startDate, endDate, product, status } = req.query;

    let dateFilter = {};
    let statusFilter = {};

    // Date Filter
    if (startDate && endDate) {
      const start = moment.utc(startDate, 'YYYY-MM-DD').startOf('day').toDate();
      const end = moment.utc(endDate, 'YYYY-MM-DD').endOf('day').toDate();
      dateFilter = { updated_at: { $gte: start, $lte: end } }
    }

    // Status Filter
    if (status) {
      statusFilter = { status: status };
    }

    // Combine filters
    const filters = {
      ...dateFilter,
      ...statusFilter
    };

    // Query with combined filters
    let data = await Storage.find(filters)
      .populate({
        path: 'batch_id',
        populate: {
          path: 'product_id',
          model: 'Product'
        }
      });

    if (product) {
      data = data.filter(doc =>
        doc.batch_id && doc.batch_id.product_id && doc.batch_id.product_id.name === product
      );
    }

    res.json({
      message: 'Data loaded successfully',
      data: data,
      count: data.length,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCapacity = async (req, res) => {
  try {
    const inProgressStorage = await Storage.find({ status: Status.IN_PROGRESS });
    const inProgressCount = inProgressStorage.length;

    const currentTime = moment();
    const inProgressData = inProgressStorage.map(Storage => {
      const batchDateIn = moment(Storage.batch_date_in);
      const predictedETA = moment(Storage.predicted_ETA);
      const timeElapsed = batchDateIn.diff(currentTime);
      const timeLeft = predictedETA.diff(timeElapsed)

      return {
        ...Storage.toObject(),
        time_left: timeLeft > 0 ? timeLeft : 0,
      };
    });

    const rejectedStorage = await Storage.aggregate([
      { $match: { status: Status.REJECTED } },
      { $group: { _id: '$rejection_reason', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({
      message: 'Data loaded successfully',
      data: {
        inProgressCount,
        inProgressData,
        rejectedReasons: rejectedStorage,
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBatchesByStatusAndDate, getCapacity };
