
const mongoose = require('./connection.js')


const Inventory = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})

const Food = mongoose.model('Food', Inventory)

const Cleaning = mongoose.model('Cleaning', Inventory)

const Other = mongoose.model('Other', Inventory)







module.exports = {
    Food,
    Cleaning,
    Other,

}