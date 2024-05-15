const { Worker } = require("../models")

const create_worker = (data) => {
    return Worker.create(data)
}


module.exports = {
    create_worker
}