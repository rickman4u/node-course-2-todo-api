var mongoose = require('mongoose');


var User = mongoose.model('User',{
  email:{
    type: String,
    required: true,
    trim: true,
    minlength : 4
    // required: [true, 'Why no text?']
  }
});

module.exports = {User}
