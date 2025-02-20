import express from "express";
import ApiController from "../controller/ApiController";
import ApiRolesController from "../controller/ApiRolesController";
const routes = express.Router();
import { checkUserJWT, checkUserAccessible } from "../Middleware/JWTAction";

// const checkUserLogin = (req, res, next) => {
//     const nonCheckPath = ["/", "/signup", "login"];
//     if (nonCheckPath.includes(req.path)) {
//         return next();
//         if (user) {
//             next();
//         } else {

//         }
//     }
// }

const initApiRoutes = (app) => {
    routes.all("*", checkUserJWT, checkUserAccessible);
    routes.get("/", ApiController.handleAPI);
    routes.post("/signup", ApiController.handleSignup);
    routes.post("/login", ApiController.handleLogin);

    routes.get("/users", ApiController.getUsers);
    routes.get("/userspage", ApiController.getAPageOfUsers);
    routes.put("/user/update", ApiController.updateUserWithId);
    routes.delete("/user/delete", ApiController.deleteUser);
    routes.post("/user/createFullUser", ApiController.createUserFullData);

    routes.get("/users/roles", ApiRolesController.readRoles);

    return app.use("/api/", routes);
}

export default initApiRoutes;