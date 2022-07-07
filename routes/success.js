const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');
const router = express.Router();

const productsController = require('../controllers/products');

router.use('/success',productsController.useSuccess);
module.exports = router;