const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '5a69b9ff3b837f1c07503f9c11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }

//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// User.findById
var userId = '5a68b1d7a3eeaea04a909d28';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log('User', user);
}).catch((e) => console.log(e));