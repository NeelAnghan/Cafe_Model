const { Receipe } = require("../models")

const create_receipe = (data) => {
    return Receipe.create(data)
}

module.exports = {
    create_receipe
}