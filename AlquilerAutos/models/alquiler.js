'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /* Alquiler.belongsTo(models.cliente, { 
        foreignKey: 'idCliente',
        as: 'Clientes',
        onUpdate: 'CASCADE'
      });
      Alquiler.belongsTo(models.autos, { 
        foreignKey: 'idAuto',
        as: 'Autos',
        onUpdate: 'CASCADE'
      }) */
    }
  }
  Alquiler.init({
    idCliente: DataTypes.INTEGER,
    idAuto: DataTypes.INTEGER,
    fechaInicio: DataTypes.DATE,
    fechaFinal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alquiler',
    tableName:'alquilers'
  });
  return Alquiler;
};