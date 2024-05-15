const { default: mongoose, model } = require("mongoose");

const worker_Schema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true
    },
    last_name:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    contact:{
        type: Number,
        default: 100
    },
    salary:{
        type: Number,
        default: 0
    },
},{
    timestamps: true,
    versionKey: false
})

const worker = mongoose.model("Worker",worker_Schema)
module.exports = worker