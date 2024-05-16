const { Product } = require("../models")

const create_product = (data) => {
    return Product.create(data)
}

const get_list_product_services = () => {
    return Product.find()
}


module.exports = {
    create_product,
    get_list_product_services
}