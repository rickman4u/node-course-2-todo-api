// const MongoClient = require('mongodb').MongoClient;


const {MongoClient,ObjectID} = require('mongodb');

// var user = {
//   name: 'Richard',
//   age : 39,
//   location:'Ennis'
// };
//
// var {name} = user;
// console.log(name);


var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //   text: 'some todo that is special',
    //   completed : false
    // },(err,result) =>{
    //   if(err){
    //     return console.log('Unable to insert to mongodb server todo',err);
    //   }
    //   console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //   name: 'Richard',
    //   age : 39,
    //   location:'Ennis'
    // },(err,result) =>{
    //   if(err){
    //     return console.log('Unable to insert to mongodb server Users',err);
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });




    client.close();
});
