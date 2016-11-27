const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/connection').mongoose;
const User = require('./models/user').User;
const File = require('./models/files').File;

var app = express();
app.use(bodyParser.json());

app.post('/user', (request, response) => {
    var user = new User(
        {
            name: request.body.name,
            email: request.body.email
        }
    );

    user.save().then(
        (doc) => {
            response.send(doc);
        }, (error) => {
            response.status(400).send(error);
        }
    );
});

app.post('/newfile', (request, response) => {
    var file = new File(
        {
            filename: request.body.filename
        }
    );

    file.save().then((doc) => {
        response.send(doc);
    }, (error) => {
        response.status(400).send(error);
        }
    );

});

port = 3000;
app.listen(port, () => {
    console.log('Server up on port ' + port);
});