const Cooking = require('../dal/models/cooking');
const Product = require('../dal/models/products');
const moment = require('moment');

const get = async (req, res) => {
  try {
    // Get date from query parameter, default to '2023-11' if not provided
    const date = req.query.date || '2023-11';

    // Parse date for start and end of the month
    const startOfMonth = moment(date, 'YYYY-MM').startOf('month').toDate();
    const endOfMonth = moment(date, 'YYYY-MM').endOf('month').toDate();

    // Query with the date range filter
    const data = await Cooking.find({
      $or: [
        { batch_date_in: { $gte: startOfMonth, $lt: endOfMonth } },
        { batch_date_out: { $gte: startOfMonth, $lt: endOfMonth } }
      ]
    })
    .populate({
      path: 'batch_id',
      populate: {
        path: 'product_id',
        model: 'Product'
      }
    });

    res.json({
      message: 'Data loaded successfully',
      data: data
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { get };
