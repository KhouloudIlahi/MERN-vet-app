const mongoose = require('mongoose')


const registerSchema = new mongoose.Schema({
    nom: String,
    email : String,
    password : String
})

const registerModel = mongoose.model("rapports", registerSchema)
module.exports = registerModel