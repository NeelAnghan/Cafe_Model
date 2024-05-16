const { Concert } = require("../models")

const create_concert = (data) => {
    return Concert.create(data)
}

const get_list_concert_services = () => {
    return Concert.find()
}

module.exports = {
    create_concert,
    get_list_concert_services
}