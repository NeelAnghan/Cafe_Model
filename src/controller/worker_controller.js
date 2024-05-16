const { worker_Services } = require("../services");

const create_worker = async (req, res) => {
    try {
        setTimeout(() => {
            console.log(req.body);
        })
        const reqbody = req.body

        const new_worker = await worker_Services.create_worker(reqbody)

        if (!new_worker) {
            throw new Error("Something Went Wrong!!!!")
        }

        res.status(200).json({
            success: true,
            data: new_worker
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_list_worker_controller = async (req, res) => {
    try {
        const list = await worker_Services.get_list_worker_services()
        if (!list) {
            throw new Error("List Not Found!!!")
        }
        setTimeout(() =>{
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
    create_worker,
    get_list_worker_controller
}