const express = require("express")
const { cafe_Controller } = require("../controller")

const router = express.Router()

router.post("/create-detail",cafe_Controller.create_detail)

router.get("/get-list-detail",cafe_Controller.get_list_detail_controller)


module.exports = router