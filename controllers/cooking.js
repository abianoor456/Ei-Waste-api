const Cooking = require('../dal/models/cooking');
const Product = require('../dal/models/products');

const get = async (req, res) => {
  try {

    const data = await Cooking.find()
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
