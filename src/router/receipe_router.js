const express = require("express")
const { receipe_Controller } = require("../controller")

const router = express.Router()

router.post("/create-receipe",receipe_Controller.create_receipe)

router.get("/get-list-recipe",receipe_Controller.get_list_recipe_controller)

module.exports = router