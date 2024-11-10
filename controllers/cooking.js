const Cooking = require('../dal/models/cooking');
const Product = require('../dal/models/products');
const moment = require('moment');

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
    let data = await Cooking.find(filters)
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


module.exports = { getBatchesByStatusAndDate };
