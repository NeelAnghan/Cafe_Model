const express = require("express")
const { product_Controller } = require("../controller")

const router = express.Router()

router.post("/create-product",product_Controller.create_product)

module.exports = router