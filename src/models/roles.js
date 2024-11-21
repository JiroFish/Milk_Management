'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.hasMany(models.Users, { foreignKey: 'idRole', targetKey: 'idRole' });
      Roles.belongsToMany(models.Accesses, { through: 'Roles_Accesses', foreignKey: 'idRole', otherKey: 'idAccess' });
    }
  }
  Roles.init({
    roleName: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Roles',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    }
  });
  return Roles;
};