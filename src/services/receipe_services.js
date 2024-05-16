const { Receipe } = require("../models")

const create_receipe = (data) => {
    return Receipe.create(data)
}

const get_list_recipe_services = () =>{
    return Receipe.find()
}

module.exports = {
    create_receipe,
    get_list_recipe_services
}