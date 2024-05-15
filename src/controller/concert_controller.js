const { concert_Services } = require("../services");

const create_concert = async (req, res) => {
    try {
        setTimeout(() => {
            console.log(req.body);
        })
        const reqbody = req.body

        const new_concert = await concert_Services.create_concert(reqbody)

        if (!new_concert) {
            throw new Error("Something Went Wrong !!!!")
        }

        res.status(200).json({
            succes: true,
            data: new_concert
        })
    } catch (error) {
        res.status(400).json({
            succes: true,
            message: error.message
        })
    }
}

module.exports = {
    create_concert
}