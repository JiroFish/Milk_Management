const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('jwt_database', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối DB thành công');
    } catch (error) {
        console.error('Lỗi kết nối DB', error);
    }
}

export default connect;