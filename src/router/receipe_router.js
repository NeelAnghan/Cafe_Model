const express = require("express")
const { receipe_Controller } = require("../controller")

const router = express.Router()

router.post("/create-receipe",receipe_Controller.create_receipe)

module.exports = router