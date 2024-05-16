const express = require("express")
const { product_Controller } = require("../controller")

const router = express.Router()

router.post("/create-product",product_Controller.create_product)

router.use("/get-list-product",product_Controller.get_list_product_controller)


module.exports = router