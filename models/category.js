
const mongoose = require('./connection.js')


const Category = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})


module.exports = mongoose.model('Category', Category);