const Handle_Home = (req, res) => {
    return res.render("home.ejs");
}
const Handle_User = (req, res) => {
    return res.render("user.ejs");
}
const Handle_Sign_up = (req, res) => {
    return res.render("sign_up.ejs");
}
module.exports = {
    Handle_Home,
    Handle_User,
    Handle_Sign_up
}