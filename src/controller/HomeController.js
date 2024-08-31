import userService from "../service/userService";

const Handle_Home = (req, res) => {
    return res.render("home.ejs");
}
const Handle_User = (req, res) => {
    return res.render("user.ejs");
}
const Handle_Sign_up = async (req, res) => {
    let listUser = await userService.readUser();
    return res.render("sign_up.ejs", { listUser });
}
const Handle_Create_User = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
<<<<<<< HEAD
    conn.query(
        'insert user_milk(email,password) values (?,?)', [email, password],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results);
        }
    )


=======
    userService.createUser(email, password);
>>>>>>> 1a86e456b70771fbf56305c49450f21b3c2893af
}
module.exports = {
    Handle_Home,
    Handle_User,
    Handle_Sign_up,
    Handle_Create_User
}