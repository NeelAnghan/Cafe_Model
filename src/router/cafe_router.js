const express = require("express")
const { cafe_Controller } = require("../controller")

const router = express.Router()

router.post("/create-detail",cafe_Controller.create_detail)

module.exports = router