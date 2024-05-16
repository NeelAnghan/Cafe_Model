const express = require("express")
const { concert_Controller } = require("../controller")

const router = express.Router()

router.post("/create-concert", concert_Controller.create_concert)

router.get("/get-list-concert", concert_Controller.get_list_concert_controller)


module.exports = router