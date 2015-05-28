var mongoose = require('mongoose');

var TaskSchema= new mongoose.Schema({
  name: String,
  completed: Boolean,
  description: String,
  updated_at: { type: Date, "default": Date.now }
});

//export to my node app!
module.export = mongoose.model('Task', TaskSchema);
