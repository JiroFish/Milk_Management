'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.Roles, { foreignKey: 'id_role' });
    }
  }
  Users.init({
    id_user: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};