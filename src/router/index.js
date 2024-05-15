const express = require("express")

const router = express.Router()

const cafeRoute = require("./cafe_router")

const productRoute = require("./product_router")

const receipeRoute = require("./receipe_router")

const concertRoute = require("./concert_router")

const workerRoute = require("./worker_router")

router.use("/detail",cafeRoute)

router.use("/product",productRoute)

router.use("/receipe",receipeRoute)

router.use("/concert",concertRoute)

router.use("/worker",workerRoute)

module.exports = router