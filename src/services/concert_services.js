const { Concert } = require("../models")

const create_concert = (data) => {
    return Concert.create(data)
}

module.exports = {
    create_concert
}