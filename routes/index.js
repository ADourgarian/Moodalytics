var express = require('express');
var router = express.Router();
var moodCol = require('../models/moods.js');

/* GET home page. */
router.get('/moodOutput', function(req, res, next) {
  moodCol.find({},function(err, docs){
    console.log(docs);
    res.send(docs);
  })
});

router.post('/moodInput', function(req, res, next){
  console.log("asdflkjsdf");
  console.log(req.body);

  res.send("You've successfully posted to the server", req.body);
  moodCol.Create(req.body, function(err, newMood){
    console.log("newMood",newMood);
    console.log("ERR2!", err);
  });
});

module.exports = router;
