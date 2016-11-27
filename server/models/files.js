var mongoose = require('mongoose');

var File = mongoose.model('files',
    {
        filename: {
            type: String,
            required: true,
            minlength: 3,
            trim: true
        },
        created:{
            type: Date,
            default: new Date()
        }
    }
);

module.exports = {File: File};