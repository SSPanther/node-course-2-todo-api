//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a689d0be8c55c173c8e9726')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Stephen'
    }, {
        $set: {
            name: 'George'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        name: 'Buster'
    }, {
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});