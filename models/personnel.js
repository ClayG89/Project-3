
const mongoose = require('./connection.js')


const Personnel = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})


module.exports = mongoose.model('Personnel', Personnel);