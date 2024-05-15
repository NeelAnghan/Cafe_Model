const express = require("express")
const { concert_Controller } = require("../controller")

const router = express.Router()

router.post("/create-concert", concert_Controller.create_concert)

module.exports = router