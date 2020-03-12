
const mongoose = require('./connection.js')


const Inventory = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})


module.exports = mongoose.model('Inventory', Inventory);