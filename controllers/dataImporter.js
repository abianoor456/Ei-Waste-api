const xlsx = require('xlsx');
const Batch = require('../dal/models/batch');
const Cooking = require('../dal/models/cooking');
const moment = require('moment');
const { Status } = require('../utils/enums');

const initData = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const workbook = xlsx.readFile(req.file.path);
    const sheetName = 'FAITH COOKING';

    if (!workbook.SheetNames.includes(sheetName)) {
      return res.status(404).json({ message: `Sheet "${sheetName}" not found` });
    }

    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

   

    for (const entry of data) {
   
        const batchNumber = entry['BATCH no.'];
        
        // Check if the batch already exists
        let batch = await Batch.findOne({ batch_number: batchNumber});
       
        if (!batch) {
          // Create new batch if it doesn't exist
          batch = new Batch({
            batch_number: batchNumber,
            product_id:'672fd0c1e8219fd05c5a33ec'
          });
         
          await batch.save();
        }

        // Create a new Cooking document using the new batch ID
        const cookingData = {
          batch_id: batch._id,
          batch_weight_in: entry.batch_weight_in,
          batch_weight_out: entry.batch_weight_out,
          batch_date_in: moment(entry.batch_date_in, "YYYY-MM-DD HH.mm.ss").toDate(),
          batch_date_out: moment(entry.batch_date_out, "YYYY-MM-DD HH.mm.ss").toDate(),
          predicted_yield: entry.predicted_yield || null,
          predicted_ETA: entry.predicted_eta || null,
          status: Status.COMPLETED
        };

      

        // Save the Cooking document
        await Cooking.create(cookingData);
      
    }

    res.json({
      message: 'Data loaded successfully',
      data: data
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { initData };
