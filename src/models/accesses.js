'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Accesses.belongsToMany(models.Roles, { through: 'Roles_Accesses', foreignKey: 'idAccess', otherKey: 'idRole' });
    }
  }
  Accesses.init({
    idAccess: {  // Định nghĩa idAccess là primary key
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    roleName: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Accesses',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    }
  });
  // Accesses.removeAttribute('id');
  return Accesses;
};