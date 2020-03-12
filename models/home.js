
const mongoose = require('./connection.js')


const Home = new mongoose.Schema({
    name: String,
    count: Number,
    description: String
})


module.exports = mongoose.model('Home', Home);