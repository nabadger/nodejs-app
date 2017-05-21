var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) { 

  // Populate a user table (perform some writes)
  var random_username = Math.random().toString(36).slice(2);
  models.User.create({ username: random_username});

  // Delete when we reach 50 entries
  models.User.count().then(function(c) {
    if (c > 50) 
      models.User.destroy({truncate:true});
  });

  // Fetch all instances and deploy them to the user
  models.User.findAll().then(function(users) {
    res.render('index', {
      title: 'Simple node server with cockroach-db backend',
      users: users
    });
  });
});

module.exports = router;
