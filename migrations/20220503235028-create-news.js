'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('news', {
      id_inventory: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "inventories",
          key: "id_inventory"
        }
      },
      news_title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      removed_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('news');
  }
};