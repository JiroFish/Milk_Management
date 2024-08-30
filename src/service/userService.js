import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hash = bcrypt.hashSync(userPassword, salt);
    return hash;
}

const createUser = (email, password) => {
    let hashedPassword = hashPassword(password);
    conn.query(
        'insert User(email,password) values (?,?)', [email, hashedPassword],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results);
        }
    )
}

const readUser = async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test'
    })
    let user = [];
    try {
        const [rows, fields] = await conn.execute("select * from user");
        return rows;
    } catch (err) {
    }
}
module.exports = { createUser, readUser }