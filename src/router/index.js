const express = require("express")

const router = express.Router()

const cafeRoute = require("./cafe_router")

const productRoute = require("./product_router")

router.use("/detail",cafeRoute)

router.use("/product",productRoute)

module.exports = router