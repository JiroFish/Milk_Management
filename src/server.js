import express from "express";
import viewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

viewEngine.configViewEngine(app);
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("PORT=" + PORT);
})