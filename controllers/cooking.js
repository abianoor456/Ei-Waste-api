const Cooking = require('../dal/models/cooking');
const Product = require('../dal/models/products');
const moment = require('moment');

const get = async (req, res) => {
  try {

    const startOfMonth = moment('2023-11', 'YYYY-MM').startOf('month').toDate();
    const endOfMonth = moment('2023-11', 'YYYY-MM').endOf('month').toDate();

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
