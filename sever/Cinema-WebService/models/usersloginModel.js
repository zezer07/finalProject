const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    UserName : String,
    Password : String
})

module.exports = mongoose.model('user',UserSchema);