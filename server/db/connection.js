var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/dataTest');

module.exports = {mongoose: mongoose};