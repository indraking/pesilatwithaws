'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    id:{ 
      type : DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    user_id: DataTypes.STRING,
    shop_id: DataTypes.STRING,
    order_date: DataTypes.DATE,
    item_weight: DataTypes.DOUBLE,
    priceKg: DataTypes.DOUBLE,
    total_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};