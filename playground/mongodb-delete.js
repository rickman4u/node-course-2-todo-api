const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // deleteMany
    // deleteOne
    // findOneAndDelete

  // db.collection('Todos').deleteMany({text: 'wallk the dog'}).then((result)=>{
  //   console.log(result);
  // });
  //
  //
  // db.collection('Todos').deleteOne({text: 'My wallk the dog'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Todos').findOneAndDelete({text: 'wallk the dog'}).then((result)=>{
    console.log(result);
  });


    // client.close();
});
