import userService from "../service/userService";

const Handle_Home = (req, res) => {
    return res.status(200).json({
        message: "ok"
    })
}
const Handle_User = (req, res) => {
    return res.render("user.ejs");
}
const Handle_Sign_up = async (req, res) => {
    let listUser = await userService.readUser();
    await userService.deleteUser();
    return res.render("sign_up.ejs", { listUser });
}
const Handle_Create_User = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    userService.createUser(email, password);
    return res.redirect("/signup");
}
const Handle_delete = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/signup");
}
module.exports = {
    Handle_Home,
    Handle_User,
    Handle_Sign_up,
    Handle_Create_User,
    Handle_delete
}