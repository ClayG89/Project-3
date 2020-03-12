
const mongoose = require('./connection.js')


const Other = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})


module.exports = mongoose.model('Other', Other);