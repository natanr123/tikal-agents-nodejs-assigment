'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('agents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING,
	      unique : true
      },
      missions_count: {
        type: Sequelize.INTEGER,
	      allowNull: false,
	      defaultValue: 0
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('agents');
  }
};