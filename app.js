const http= require('http');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const rootDir = require('../util/path.js');
const path = require('path');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const contactRoutes = require('./routes/contact.js')
const successRoute = require('./routes/success.js');
const exp = require('constants');

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(successRoute);

app.use(errorController.get404);

app.listen(3000);


