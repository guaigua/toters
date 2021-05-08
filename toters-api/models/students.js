'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Students.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    mail: DataTypes.STRING,
    birth: DataTypes.STRING,
    country: DataTypes.STRING,
    urlphoto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};