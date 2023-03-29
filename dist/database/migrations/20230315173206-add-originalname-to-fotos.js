"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('fotos', 'originalname', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  },
};
