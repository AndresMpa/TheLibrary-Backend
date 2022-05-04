'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventories', {
      id_inventory: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      issn: {
        type: Sequelize.STRING,
        references: {
          model: "books",
          key: "issn"
        }
      },
      language: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      reserved: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('inventories');
  }
};