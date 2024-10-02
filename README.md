**CHẠY LỆNH TRONG GITBASH**
Tạo migrations (đã tạo thì không cần):
npx sequelize-cli model:generate --name Users --attributes id_user:INTEGER,email:string,password:string,username:string,age:INTEGER,sex:string,address:string,phone:string,id_role:INTEGER
npx sequelize-cli model:generate --name Roles --attributes roleName:string,description:text
npx sequelize-cli model:generate --name Roles_Accesses --attributes id_role:INTEGER,id_access:INTEGER
npx sequelize-cli model:generate --name Accesses --attributes id_access:INTEGER,accessName:string,description:text

Chạy migrations (thực thi phần Tạo migrations - Đẩy lên DB):
npx sequelize-cli db:migrate

//////

Tạo seeder demo (đã tạo thì không cần):
npx sequelize-cli seed:generate --name User1

Chạy seeder demo:
npx sequelize-cli db:seed:all