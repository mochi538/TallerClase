'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alquilers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCliente: {
        type: Sequelize.INTEGER,
        references:{
          model:'Clientes',
          key: 'id'
        }
      },
      idAuto: {
        type: Sequelize.INTEGER,
        references:{
          model:'Clientes',
          key: 'id'
        }
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechaFinal: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alquilers');
  }
};