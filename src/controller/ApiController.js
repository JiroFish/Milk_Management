import apiUserService from "../service/apiUserService";

const handleAPI = (req, res) => {
    return res.status(200).json({ message: "api return" });
}

const handleSignup = async (req, res) => {
    try {
        if (!req.body.email || !req.body.username || !req.body.password) {
            return res.status(200).json({
                EM: "Thiếu thông tin",
                EC: 1,
                DT: ""
            })
        }

        if (req.body.password && req.body.password.length < 8) {
            return res.status(200).json({
                EM: "Password cần có ít nhất 8 ký tự",
                EC: 1,
                DT: ""
            })
        }

        let data = await apiUserService.createUser(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ""
        });

    } catch (error) {
        return res.status(500).json({
            EM: "Lỗi server ở ApiController...",
            EC: "-1",
            DT: ""
        });

    }
}
const handleLogin = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(200).json({
                EM: "Thiếu thông tin",
                EC: 1,
                DT: ""
            })
        }

        let data = await apiUserService.userLogin(req.body);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ""
        });
    } catch (error) {
        return res.status(500).json({
            EM: "Lỗi server ở ApiController...",
            EC: "-1",
            DT: ""
        });

    }
}

const getUsers = async (req, res) => {
    try {
        let data = await apiUserService.readUser();
        return res.status(200).json({
            EM: "Lấy tất cả thông tin Users thành công",
            EC: 0,
            DT: data
        })
    } catch (error) {
        return res.status(500).json({
            EM: "Lỗi server ở ApiController...",
            EC: "-1",
            DT: ""
        });
    }
}

const getAPageOfUsers = async (req, res) => {
    try {
        if (req.query.page) {
            const data = await apiUserService.getAPageUsers(req.query.page);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Lỗi server ở ApiController...",
            EC: "-1",
            DT: ""
        });
    }
}
module.exports = {
    handleAPI, handleSignup, handleLogin, getUsers, getAPageOfUsers
}
