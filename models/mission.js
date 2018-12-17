'use strict';
module.exports = (sequelize, DataTypes) => {
  const mission = sequelize.define('mission', {
    agent: DataTypes.STRING,
    country: DataTypes.STRING,
    address: DataTypes.STRING,
    mission_date: DataTypes.DATE
  }, { timestamps: false});
  mission.associate = function(models) {
    // associations can be defined here
  };

  mission.addHook('afterCreate', 'updateAgent', (mission, options) => {

    //console.log('fffffffffffffffffffffffffff: ', mission);
    // console.log(options);
  });

  return mission;
};