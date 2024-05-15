const { Product } = require("../models")

const create_product = (data) => {
    return Product.create(data)
}

module.exports = {
    create_product
}