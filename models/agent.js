'use strict';
module.exports = (sequelize, DataTypes) => {
  const agent = sequelize.define('agent', {
    code: { type: DataTypes.STRING, unique: true },
    missions_count: DataTypes.INTEGER
  },  { timestamps: false});
  agent.associate = function(models) {
    // associations can be defined here
  };
  return agent;
};