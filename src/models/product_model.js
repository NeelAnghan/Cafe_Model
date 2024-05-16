const { default: mongoose } = require("mongoose");

const product_Schema = new mongoose.Schema({
    product_name:{
        type: String,
        trim: true
    },
    product_description:{
        type: String,
        trim: true
    },
    product_price:{
        type: Number,
        default: 0 
    }
},{
    timestamps: true,
    versionKey: false
})

const product = mongoose.model("Product",product_Schema)
module.exports = product