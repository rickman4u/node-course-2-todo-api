// const expect = require('expect');
//
// const request = require('supertest');
//
// const {app}  = require('./../server')
//
// var {User} = require('./../models/user');
//
// const {Todo} = require('./../models/todo');

const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {
  app
} = require('./../server');
const {
  Todo
} = require('./../models/todo');

const todos = [{
  "_id": new ObjectID(),
  "text": 'first test todo'
}, {
  "_id": new ObjectID(),
  "text": 'second test todo'
}];

// beforeEach((done) => {
//   Todo.remove({}).then(() => {
//     return Todo.insertMany(todos);
//   }).then(() => done());
// });


beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});


describe('POST /todos', () => {


  it('should create a todo', (done) => {
    var text = 'test todo text';
    request(app)
      .post('/todos')
      .send({
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find({
          text
        }).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });


  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send(null)
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });

  })
});


describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});



describe('GET /todos/:id', (done) => {
  console.log(todos[0]._id.toHexString());
  it('should get todo doc with id', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 for non existing ids', (done) => {
    var textID ='5b04a18bfdfefc75482b219e';
    request(app)
      .get(`/todos/{new ObjectID(textID)}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    var textID2 ='5b04a18bfdfefc75482b219e//';
    request(app)
      .get(`/todos/{new ObjectID(textID2)}`)
      .expect(404)
      .end(done);
  });

});




// describe('GET /todos/:id', () => {
//   it('should return todo doc', (done) => {
//     request(app)
//       .get(`/todos/${todos[0]._id.toHexString()}`)
//       .expect(200)
//       .expect((res) => {
//         expect(res.body.todo.text).toBe(todos[0].text);
//       })
//       .end(done);
//   });
// });
