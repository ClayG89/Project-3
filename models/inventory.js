
const mongoose = require('./connection.js')


const Inventory = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})

const Food = mongoose.model('Food', Inventory)

const Cleaning = mongoose.model('Cleaning', Inventory)

const Misc = mongoose.model('Misc', Inventory)







module.exports = {
    Food,
    Cleaning,
    Misc
}
