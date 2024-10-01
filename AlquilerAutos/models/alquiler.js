'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {

    static associate(models) {
      Alquiler.belongsTo(models.cliente, { 
        foreignKey: 'idCliente',
        as: 'Clientes',
        onUpdate: 'CASCADE'
      });
      Alquiler.belongsTo(models.autos, { 
        foreignKey: 'idAuto',
        as: 'Autos',
        onUpdate: 'CASCADE'
      })
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