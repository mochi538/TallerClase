'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class adopcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      adopcion.belongsTo(models.adopcion, { 
        foreignKey: 'idPerro',
        as: 'perros',
        onUpdate: 'CASCADE'
      });
      adopcion.belongsTo(models.autos, { 
        foreignKey: 'idAdpte',
        as: 'adoptante',
        onUpdate: 'CASCADE'
      })
    }
  }
  adopcion.init({
    idPerro: DataTypes.INTEGER,
    idAdpte: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'adopcion',
  });
  return adopcion;
};