
const express = require("express")
const { worker_Controller } = require("../controller")

const router = express.Router()

router.post("/create-worker",worker_Controller.create_worker)

router.get("/get-list-worker",worker_Controller.get_list_worker_controller)


module.exports = router