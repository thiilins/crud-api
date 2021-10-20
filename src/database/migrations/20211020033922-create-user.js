"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    //Adicionar - Criar
    return queryInterface.createTable("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING(200),
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    //Desfazer
    /**
     *
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
