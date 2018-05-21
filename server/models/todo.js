var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required: true,
    trim: true
    // required: [true, 'Why no text?']
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number
  }
});

module.exports = {Todo};
