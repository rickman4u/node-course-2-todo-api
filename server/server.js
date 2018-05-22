var express = require('express');
var bodyParser = require('body-parser');

var {
  mongoose
} = require('./db/mongoose');
var {
  Todo
} = require('./models/todo');
var {
  User
} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {
  app
};





// var newTodo = new Todo({
//   text:'cook dinner'
// });

// var newTodo = new Todo({
//   text:true,
//   completedAt: 12052018
// });
// var newUser = new User({
//   email:'richard.nodecourse@find4u.co.uk'
// });
//


// newTodo.save().then((doc) => {
//   console.log('Saved Todo',doc);
// },(e)=>{
//   console.log('Unable to save Todo');
// });

// newUser.save().then((doc) => {
//   console.log('Saved user',doc);
// },(e)=>{
//   console.log('Unable to save user');
// });
