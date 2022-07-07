const path = require('path');
const rootDir = require('../util/path.js');
exports.get404 = (req,res,next) => {
    // console.log('byee');
     //res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
 }