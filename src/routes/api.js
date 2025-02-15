import express from "express";
import ApiController from "../controller/ApiController";
import ApiRolesController from "../controller/ApiRolesController";
const routes = express.Router();


const initApiRoutes = (app) => {
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