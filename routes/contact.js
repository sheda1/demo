const path = require('path');
const express = require('express');
// const rootDir = require('../util/path.js');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/contact-us',productsController.getContact);

router.post('/contact-us',productsController.postContact);

module.exports = router;