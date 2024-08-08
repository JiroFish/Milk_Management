import mysql from 'mysql2';
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
})



const Handle_Home = (req, res) => {
    return res.render("home.ejs");
}
const Handle_User = (req, res) => {
    return res.render("user.ejs");
}
const Handle_Sign_up = (req, res) => {
    return res.render("sign_up.ejs");
}
const Handle_Create_User = (req, res) => {

    console.log("email=", req.body);
    let email = req.body.email;
    let password = req.body.password;
    conn.query(
        'insert User(email,password) values (?,?)', [email, password],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results);
        }
    )


}
module.exports = {
    Handle_Home,
    Handle_User,
    Handle_Sign_up,
    Handle_Create_User
}