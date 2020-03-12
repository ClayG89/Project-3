
const Other = new mongoose.Schema({
    name: String,
    amount: Number,
    description: String
})

const Utilities = mongoose.model('Utilities', Other)

const Rent = mongoose.model('Rent', Other)



module.exports = {
    Utilities,
    Rent,
    

}