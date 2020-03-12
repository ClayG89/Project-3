
const mongoose = require('./connection.js')


const Table = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})


module.exports = mongoose.model('Table', Table);