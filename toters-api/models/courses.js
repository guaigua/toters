'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Courses.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    hours: DataTypes.INTEGER,
    teachers_id: DataTypes.INTEGER,
    students_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};