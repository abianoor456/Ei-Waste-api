const express = require('express');
const multer = require('multer');
const dataImporter = require('../controllers/dataImporter');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/init-data', upload.single('file'), dataImporter.initData);

module.exports = router;
