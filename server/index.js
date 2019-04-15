const express = require('express');
const config = require('../config/config');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require('./routes/api'));

app.listen(config.PORT,function(req,res){
  console.log("Server listening on port:"+config.PORT);
});
