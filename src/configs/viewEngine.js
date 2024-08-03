import express from "express";
const configViewEngine = (app) => {   //truyền vào app (=express)
    app.use(express.static('./src/public')); // code cho biết app có thể lấy hình ảnh, css, javascript từ đâu (public)
    app.set("view engine", "ejs"); //cho express biết ta sử dụng VE từ thư viện ejs để code html
    app.set("views", "./src/views"); //cho biết tất cả viewEngine sẽ lưu ở src/views
}
export default configViewEngine; //default ám chỉ export đúng 1 hàm | sau default là hàm được tham chiếu(ko phải gọi hàm | nghĩa là không cần () viDu() )
