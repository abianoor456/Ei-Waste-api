const express = require('express');
const storage = require('../controllers/storage');
const router = express.Router();

router.get('/getBatches', storage.getBatchesByStatusAndDate);
router.get('/getCapacity', storage.getCapacity);


module.exports = router;
