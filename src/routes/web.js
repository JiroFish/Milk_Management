import express from "express";
import HomeController from "../controller/HomeController";
const routes = express.Router();


const initWebRoutes = (app) => {
    routes.get("/", HomeController.Handle)
    return app.use("/", routes);
}
// module.exports = {
//     initWebRoutes
// }
export default initWebRoutes;