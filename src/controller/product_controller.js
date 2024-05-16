const { product_Services } = require("../services");


const create_product = async (req, res) => {
    try {
        // reqbody
        setTimeout(() => {
            console.log(req.body);
        })
        const reqbody = req.body
        // Send reqbody to database || Awaited Service
        // Result
        const new_product = await product_Services.create_product(reqbody)
        // Result verify
        if (!new_product) {
            throw new Error("Something went wrong !!!!")
        }
        // Response according to result
        res.status(200).json({
            success: true,
            data: new_product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_list_product_controller = async (req, res) => {
    try {
        const list = await product_Services.get_list_product_services()
        if (!list) {
            throw new Error("List Not Found!!!")
        }
        setTimeout(() => {
            console.log(list);
        }, 2000)
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
    create_product,
    get_list_product_controller
}