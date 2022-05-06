'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('histories', {
      id_history: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      id_inventory: {
        type: Sequelize.STRING,
        references: {
          model: "inventories",
          key: "id_inventory"
        }
      },
      cc: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "cc"
        }
      },
      purchased: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('histories');
  }
};