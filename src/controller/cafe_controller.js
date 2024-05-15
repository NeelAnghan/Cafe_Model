const { cafe_Service } = require("../services");


const create_detail = async (req, res) => {
    try {
        // reqbody
        setTimeout(() =>{
            console.log(req.body);
        },2000)
        const reqbody = req.body
        // Send reqbody to database || Awaited Service
        // Result
        const new_detail = await cafe_Service.create_detail(reqbody)
        // Result verify
        if (!new_detail) {
            throw new Error("Something went wrong !!!!")
        }
        // Response according to result
        res.status(200).json({
            success: true,
            data: new_detail
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_detail
}