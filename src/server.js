import express from "express";
import viewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import bodyParser from 'body-parser';
require("dotenv").config();
import cors from "./configs/configCORS";

import { CreateJWTToken, EncodeJWT } from "./Middleware/JWTAction";

const app = express();
const PORT = process.env.PORT || 8000;
cors(app);

//config bodyParser rút gọn thông báo request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//check JWT
CreateJWTToken("a", "b");
EncodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJwYXNzd29yZCI6ImIiLCJpYXQiOjE3Mzk2ODY3MzksImV4cCI6MTczOTY5MDMzOX0.3TkzEKmkK5zF0BSQ8dZyQq4gEQORE1X5B1a5h4qFD0g");

//KHởi động viewEngine biên dịch code import - require
viewEngine.configViewEngine(app);

//Khởi động routes để biết có những routes nào
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
    console.log("PORT=" + PORT);
})