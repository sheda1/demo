const path = require('path');
const express = require('express');
// const rootDir = require('../util/path.js');
const productsController = require('../controllers/products');
const router = express.Router();

router.use('/shop',productsController.getProducts);
module.exports = router;