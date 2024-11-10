const express = require('express');
const cooking = require('../controllers/cooking');
const router = express.Router();

router.get('/getBatches', cooking.getBatchesByStatusAndDate);

module.exports = router;
