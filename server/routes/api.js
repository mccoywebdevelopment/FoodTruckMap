const express = require('express');
const router = express();


router.get('/API',function(req,res){
  res.json({
    name: "Chris",
    age: 22
  });
});

router.post("/signUp", csrfProtection,function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.render("register", {error: err.message});
      }
      passport.authenticate("local")(req, res, function(){
              //console.log(done);
              res.redirect("/");
      });
  });
});

module.exports = router;
