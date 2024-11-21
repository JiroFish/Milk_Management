import express from "express";
import viewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import bodyParser from 'body-parser';
require("dotenv").config();
import cors from "./configs/configCORS";

const app = express();
const PORT = process.env.PORT || 8000;
cors(app);

//config bodyParser rút gọn thông báo request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//KHởi động viewEngine biên dịch code import - require
viewEngine.configViewEngine(app);

//Khởi động routes để biết có những routes nào
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
    console.log("PORT=" + PORT);
})