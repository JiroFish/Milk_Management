import express from "express";
const configViewEngine = (app) => {
    app.use(express.static('./src/public')); //cho biết app có thể lấy hình ảnh, css, javascript từ đâu (public)
    app.set("view engine", "ejs"); //cho express biết ta sử dụng VE từ thư viện ejs để code html
    app.set("views", "./src/views"); //cho biết tất cả viewEngine sẽ lưu ở src/views
}

module.exports = {
    configViewEngine
}
// export configViewEngine;