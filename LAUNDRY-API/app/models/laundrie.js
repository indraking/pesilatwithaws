'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laundrie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  laundrie.init({
    id:{ 
      type : DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    opening_hours: DataTypes.STRING,
    priceKg: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'laundrie',
  });
  return laundrie;
};