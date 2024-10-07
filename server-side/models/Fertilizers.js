const mongoose = require('mongoose')

const fertilizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        default:0
    },
    image:{
        type:String,
        default:""
    },
    category:{
        type:String,
        required:true,
        enum:["chilli","cotton","paddy","vegtables"],
        default:"vegtables"
    }
})

const Fertilizers = mongoose.model('Fertilizers', fertilizerSchemaSchema)
module.exports = Fertilizers;