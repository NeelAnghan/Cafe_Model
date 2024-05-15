const { default: mongoose } = require("mongoose");

const recipe_Schema = new mongoose.Schema({
    recipe_name: {
        type: String,
        trim: true
    },
    recipe_ingredients: {
        type: String,
        trim: true
    },
    recipe_instructions: {
        type: String,
        trim: true
    }
},{
    timestamps: true,
    versionKey: false
})

const recipe = mongoose.model("Recipe",recipe_Schema)
module.exports = recipe