const express = require('express');
const config = require('../config/config');
const User=require('./models/user');
const app = express();
const passport=require('passport');

if(process.env.PORT && process.env.MONGODB_URI.toString())
{
    var PORT=process.env.PORT;
    mongoose.connect(process.env.MONGODB_URI.toString());
    keyPublishable = process.env.PUBLISHABLE_KEY;
    keySecret = process.env.SECRET_KEY;
}
else{
  PORT=config.PORT;
  mongoose.connect(config.MONGODBKEY,function(err) {
    if (err) throw err;
  });
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use(require('./routes/api'));

app.listen(config.PORT,function(req,res){
  console.log("Server listening on port:"+config.PORT);
});
