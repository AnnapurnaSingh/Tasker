var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('../models/Tasks');

// get /api/tasks
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks) {
    res.json(tasks);
  });
});

// GET /api/tasks/:id
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function(err, task) {
    res.json(task);
  });
});

// POST /api/tasks
router.post('/', function(req, res, next) {
  console.log(req.body);
  Task.create(req.body, function(err, task) {
    res.json(task);
  });
});

module.exports = router;
