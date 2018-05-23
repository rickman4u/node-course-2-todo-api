const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

// const {app} = require('./../server');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id_todo = "5b03f21483a60b4efc7be6de";
var id_user = "5b015d5d3de92d6944d02235";

if(!ObjectID.isValid(id_todo)){
   console.log('Invalid Object id');
};

Todo.find({
  _id:id_todo
}).then((todos) =>{
  console.log('Todos', todos );
}).catch((e) => {
  console.log(e);
});


Todo.findOne({
    _id:id_todo
}).then((todo) =>{
  console.log('Todo', todo );
}).catch((e) => {
  console.log(e);
});

Todo.findById(id_todo).then((todo) =>{
  if(!todo){
    return console.log('id not found');
  }
  console.log('Todo by Id', todo );
}).catch((e) => {
  console.log(e);
});

User.findById(id_user).then((user) =>{
  if(!user){
    return console.log('user not found');
  }
  console.log('User by Id', user );
}).catch((e) => {
  console.log(e);
});


User.findById(id_user).then((user) =>{
  if(!user){
    return console.log('user 2 not found');
  }
  console.log('User 2 by Id', JSON.stringify(user,undefined,2) );
},(e)=>{
  console.log(e);
}).catch((e) => {
  console.log(e);
});
