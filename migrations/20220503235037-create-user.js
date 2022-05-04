'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      cc: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      permission: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      user_account: {
        type: Sequelize.STRING
      },
      password_account: {
        type: Sequelize.STRING
      },
      news_feed: {
        type: Sequelize.BOOLEAN
      },
      preferences: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};