import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hash = bcrypt.hashSync(userPassword, salt);
    return hash;
}

const emailExist = async (emailNew) => {
    let user = await db.Users.findOne({
        where: { email: emailNew }
    })

    if (user) {
        return true;
    }
    return false;
}

const createUser = async (userInfo) => {
    try {
        let checkEmail = await emailExist(userInfo.email);
        if (checkEmail) {
            return {
                EM: "Email đã tồn tại",
                EC: 2
            }
        }
        let hashedPassword = hashPassword(password);
        await db.Users.create({
            email: email,
            password: hashedPassword,
            username: 'aa'
        })
        return {
            EM: "Tạo thành công người dùng",
            EC: 0
        }

    } catch (err) {
        console.log(err);
        return {
            EM: "Lỗi trong khi thực hiện thêm...",
            EC: -2
        }
    }
}

const readUser = async () => {
    let ur = [];
    try {
        ur = await db.Users.findAll({
            where: { id_role: 1 },
            attributes: ['username', 'email'],
            include: {
                model: db.Roles,
                attributes: ['roleName']
            },
            raw: true,
            nest: true
        })
        console.log(ur)
        return ur;
    } catch (err) {
        console.log(">>>>Lỗi: ", err)
    }

}

const deleteUser = async (id) => {
    try {
        // const [rows, fields] = await conn.execute("delete from Users where id=?", [id]);
        // return rows;
        await db.Users.destroy({
            where: { id: id }
        })
    } catch (err) {
    }
}
module.exports = { createUser, readUser, deleteUser }