const { Worker } = require("../models")

const create_worker = (data) => {
    return Worker.create(data)
}

const get_list_worker_services = () => {
    return Worker.find()
}

module.exports = {
    create_worker,
    get_list_worker_services
}