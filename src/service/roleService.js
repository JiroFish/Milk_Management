import db from '../models/index';


const getRoles = async () => {
    try {
        let data = await db.Roles.findAll({
            attributes: ['roleName', 'description'],
            order: [['roleName', 'ASC']],
            raw: true,
            nest: true
        });
        return {
            EM: "lấy thông tin Roles thành công!",
            EC: 0,
            DT: data
        }
    } catch (error) {
        return {
            EM: "Lỗi trong roleService",
            EC: -2,
            DT: ''
        }

    }
}
module.exports = {
    getRoles
}