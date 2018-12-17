'use strict';
module.exports = (sequelize, DataTypes) => {
  const agent = sequelize.define('agent', {
    code: DataTypes.STRING,
    country: DataTypes.STRING,
    address: DataTypes.STRING,
    mission_date: DataTypes.DATE
  }, {timestamps: false});
  agent.associate = function(models) {
    // associations can be defined here
  };
  return agent;
};