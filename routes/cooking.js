const express = require('express');
const cooking = require('../controllers/cooking');
const router = express.Router();

router.get('/', cooking.get);

module.exports = router;
