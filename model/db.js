var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster0-2qqje.mongodb.net/demo1?retryWrites=true')
 .then(() => {
 console.log("DB connected")
 }, err => {
 console.log("DB error")
 }
 );