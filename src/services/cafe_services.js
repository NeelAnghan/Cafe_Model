const { Cafe } = require("../models")

const create_detail = (data) => {
    return Cafe.create(data)
}

module.exports = {
    create_detail
}