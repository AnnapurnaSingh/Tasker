var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('../models/Tasks');

// GET all /api/tasks
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks) {
    res.json(tasks);
  });
});

// GET specific task /api/tasks/:id
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

//PUT /api/tasks/:id
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, function(error, task) {
    res.json({
      "message": "Your task has been updated!"
    });
  });
});

//PATCH /api/tasks/:id
router.patch('/:id', function(req, res, next) {
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, req.body, function(error, task) {
    res.json({
      "message": "Your task has been updated!"
    });
  });
});


// DELETE /api/tasks/:id
router.delete('/:id', function(req, res, next) {
  Task.findByIdAndRemove(req.params.id, req.body, function(error, task) {
    res.send("Your task has been deleted!");
  });
});

module.exports = router;
