'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      issn: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      number_pages: {
        type: Sequelize.INTEGER
      },
      editorial: {
        type: Sequelize.STRING
      },
      published: {
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
    await queryInterface.dropTable('books');
  }
};