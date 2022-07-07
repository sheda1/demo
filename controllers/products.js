
const path = require('path');
const rootDir = require('../util/path.js');
exports.getAddProduct = (req,res,next) => {
  
    //res.send('<form action="/add-product" method="post"><input type = "text" name = "title" ><button type ="submit">Add product</button></form>')
    console.log('hie');
    res.sendFile(path.join(rootDir,'views','add.html'));
   // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
}

exports.postAddProduct = (req,res,next) => {
    console.log("post");
    console.log(req.body.title);
    res.redirect('/shop');
}

exports.getProducts = (req,res,next) => {
    
    //res.send('<h1>Hello from express</h1>')
    res.sendFile(path.join(rootDir,'views','shop.html'));
}

exports.getContact = (req,res,next) => {
    
    //res.send('<h1>Hello from express</h1>')
    res.sendFile(path.join(rootDir,'views','contact.html'));
}
exports.postContact = (req,res,next) => {
   
    res.redirect('/success');
}

exports.useSuccess = (req,res,next) => {
    
    //res.send('<h1>Form successfully filled</h1>')
    res.sendFile(path.join(rootDir,'views','success.html'));
}