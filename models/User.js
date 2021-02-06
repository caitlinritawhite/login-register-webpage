const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    name: String,
    password: String,
    createdAt: String
});

module.exports = model('User', userSchema);