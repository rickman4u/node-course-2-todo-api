const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');


  // db.collection('Todos').findOneAndUpdate({"_id" : new ObjectID("5b004f89e7e0793aec54c836")},
  // {
  //   "_id" : new ObjectID("5b004f89e7e0793aec54c836"),
  //   "text":'walk the dog',
  //   "completed" : false
  // },
  // {
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndUpdate({"_id" : new ObjectID("5b004f89e7e0793aec54c836")},
  {
    $set:{
      "completed" : true
    }
  },
  {
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

// ObjectId("5afeb49e6784450b709c2d04")

db.collection('Users').findOneAndUpdate({"_id" : new ObjectID("5afeb49e6784450b709c2d04")},
{
  $set:{
    "name" : 'Joe Bloggs'
  },
  $inc:{"age": -2

  }
},
{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});




    // client.close();
});
