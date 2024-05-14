const { default: mongoose } = require("mongoose");

const concert_Schema = new mongoose.Schema({
    concert_title:{
        type: String,
        trim: true
    },
    concert_description:{
        type: String,
        trim: true
    },
    concert_date:{
        type: Date,
        default: Date.now
    },
    event_location:{
        type: String,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false
})

const concert = mongoose.model("Concert",concert_Schema)
module.exports = concert