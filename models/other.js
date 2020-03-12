
const mongoose = require('./connection.js')

const Other = new mongoose.Schema({
    name: String,
    amount: Number,
    description: String
})

const Utility = mongoose.model('Utility', Other)

const Rent = mongoose.model('Rent', Other)



module.exports = {
    Utility,
    Rent,
    

}