
const mongoose = require('./connection.js')


const Personnel = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})

const Payroll = mongoose.model('Payroll', Personnel)

const Vacation = mongoose.model('Vacation', Personnel)

const Benifits = mongoose.model('Benifis', Personnel)







module.exports = {
    Payroll,
    Vacation,
    Benifis,

}