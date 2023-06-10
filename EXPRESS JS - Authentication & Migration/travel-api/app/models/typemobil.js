'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeMobil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // TypeMobil.belongsTo(models.Transaction, {
      //   foreignKey: 'transactionId'
      // });
    }
  }
  TypeMobil.init({
    id: {
      type : DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    harga: DataTypes.DOUBLE,
    tanggalPesan: DataTypes.DATE,
    tanggalKembali: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'typeMobil',
  });
  return TypeMobil;
};