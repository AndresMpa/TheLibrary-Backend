'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('news', {
      id_news: {
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