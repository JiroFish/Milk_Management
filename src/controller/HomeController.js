import userService from "../service/userService";

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
    let email = req.body.email;
    let password = req.body.password;
    userService.createUser(email, password);
}
module.exports = {
    Handle_Home,
    Handle_User,
    Handle_Sign_up,
    Handle_Create_User
}