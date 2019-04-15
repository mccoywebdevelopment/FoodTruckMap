const express = require('express');
const router = express();

router.get('/API',function(req,res){
  res.json({
    name: "Chris",
    age: 22
  });
});

module.exports = router;
