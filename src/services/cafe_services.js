const { Cafe } = require("../models")

const create_detail = (data) => {
    return Cafe.create(data)
}


const get_list_detail_services = () => {
    return Cafe.find()
}

module.exports = {
    create_detail,
    get_list_detail_services
}