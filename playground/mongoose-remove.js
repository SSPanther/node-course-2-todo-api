const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: '5a69f010f3714f345fa47fba'}).then((todo) => {
    
});

Todo.findByIdAndRemove('5a69f010f3714f345fa47fba').then((todo) => {
    console.log(todo);
});