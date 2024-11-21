'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles_Accesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Roles_Accesses.init({
    idRole: DataTypes.INTEGER,
    idAccess: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Roles_Accesses',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    }
  });
  return Roles_Accesses;
};