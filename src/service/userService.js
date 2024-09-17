import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hash = bcrypt.hashSync(userPassword, salt);
    return hash;
}

const createUser = async (email, password) => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test', Promise: Bluebird
    })
    try {
        let hashedPassword = hashPassword(password);
        const [rows, fields] = await conn.execute('insert Users(email,password) values (?,?)', [email, hashedPassword]);

    } catch (err) {
        console.log(err);
    }
}

const readUser = async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test', Promise: Bluebird
    })
    let user = [];
    try {
        const [rows, fields] = await conn.execute("select * from Users");
        return rows;
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (id) => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test', Promise: Bluebird
    })
    try {
        const [rows, fields] = await conn.execute("delete from Users where id=?", [id]);
        return rows;
    } catch (err) {
    }
}
module.exports = { createUser, readUser, deleteUser }