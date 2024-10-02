import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';
import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hash = bcrypt.hashSync(userPassword, salt);
    return hash;
}

const createUser = async (email, password) => {
    try {
        let hashedPassword = hashPassword(password);
        // const [rows, fields] = await conn.execute('insert Users(email,password) values (?,?)', [email, hashedPassword]);
        await db.Users.create({
            email: email,
            password: hashedPassword,
            username: 'aa'
        })
    } catch (err) {
        console.log(err);
    }
}

const readUser = async () => {
    // const conn = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'test', Promise: Bluebird
    // })
    // const [rows, fields] = await conn.execute("select * from Users");
    // return rows;


    // let user = [];
    // try {
    //     user = await db.Users.findAll();
    //     return user;
    // } catch (err) {
    //     console.log('>>>>>lỗi', err);
    // }


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