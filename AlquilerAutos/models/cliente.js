'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
    }
  }

  Cliente.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    numLicencia: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes'

  });
  return Cliente;
};