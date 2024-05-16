const { receipe_Services } = require("../services");


const create_receipe = async (req, res) => {
    try {
        // reqbody
        setTimeout(() => {
            console.log(req.body);
        })
        const reqbody = req.body
        // Send reqbody to database || Awaited Service
        // Result
        const new_receipe = await receipe_Services.create_receipe(reqbody)
        // Result verify
        if (!new_receipe) {
            throw new Error("Something went wrong !!!!")
        }
        // Response according to result
        res.status(200).json({
            success: true,
            data: new_receipe
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_list_recipe_controller = async (req, res) => {
    try {
        const list = await receipe_Services.get_list_recipe_services()
        if (!list) {
            throw new Error("List not Found!!!")
        }
        setTimeout(() => {
            console.log(list);
        },2000)
        res.status(200).json({
            success: true,
            data: list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_receipe,
    get_list_recipe_controller
}