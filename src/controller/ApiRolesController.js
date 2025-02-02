import roleService from "../service/roleService";

const readRoles = async (req, res) => {
    try {
        // if (!req.body) {
        //     return res.status(200).json({
        //         EM: "Thiếu thông tin...",
        //         EC: 1,
        //         DT: ''
        //     })
        // }
        let data = await roleService.getRoles();
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(500).json({
            EM: "Lỗi server ở ApiController...",
            EC: "-1",
            DT: ""
        })
    }
}
module.exports = {
    readRoles
}