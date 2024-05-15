
const express = require("express")
const { worker_Controller } = require("../controller")

const router = express.Router()

router.post("/create-worker",worker_Controller.create_worker)

module.exports = router