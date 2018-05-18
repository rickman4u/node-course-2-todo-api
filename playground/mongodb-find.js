const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //    _id: new ObjectID('5afeb0f35d43d820207cb1ed')
    //  }).toArray().then((docs) =>{
    //   console.log('Todos');
    //   console.log('',JSON.stringify(docs,undefined,2));
    // },(err) =>{
    //   console.log('Unable to fectch Todos',err);
    // });


    // db.collection('Todos').find().count().then((count) =>{
    //   console.log('Todos count',count);
    //   // console.log('',JSON.stringify(count,undefined,2));
    // },(err) =>{
    //   console.log('Unable to fectch Todos',err);
    // });

    db.collection('Users').find({ "name": 'Richard' }).toArray().then((docs) =>{
      console.log('Users');
      console.log('',JSON.stringify(docs,undefined,2));
    },(err) =>{
      console.log('Unable to fectch Todos',err);
    });



    // client.close();
});
