const { default: mongoose } = require("mongoose");

const cafe_Schema = new mongoose.Schema({
    first_name:{
        type:String,
        trim:true
    },
    last_name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    contact:{
        type:Number,
        default:100
    }
},{
    timestamps: true,
    versionKey: false 
})

const cafe = mongoose.model("Cafe",cafe_Schema)
module.exports = cafe