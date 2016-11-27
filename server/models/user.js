var mongoose = require('mongoose');

var User = mongoose.model('User',
{
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        require: true,
        minlength: 5,
        trim: true
    }
});

module.exports = {User};