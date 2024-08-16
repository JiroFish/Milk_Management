import mysql from 'mysql2';
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
})

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

module.exports = { createUser }