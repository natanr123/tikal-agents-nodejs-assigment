'use strict';
const models = require('.');

module.exports = (sequelize, DataTypes) => {
  const mission = sequelize.define('mission', {
    country: DataTypes.STRING,
    address: DataTypes.STRING,
    mission_date: DataTypes.DATE
  }, { timestamps: false});
  mission.associate = function(models) {
	  mission.belongsTo(models.agent, { foreignKey: 'agent_code', targetKey: 'code', as: 'agent' });
    // associations can be defined here
  };

  mission.addHook('afterCreate', 'updateAgent', (mission, options) => {
    console.log('ddddddddddddddddddddddddddddddd');
    console.log('aaaaaaaaaaaaa: ', mission.agent.id);
	  // models.agent.update({ field: Sequelize.literal('missions_count + 1') }, { where: { id: 1 }}))

    // const agent = models.agent.findOne({ agent: mission.agent });
    // if

    // console.log('fffffffffffffffffffffffffff: ', mission);
    // console.log(options);
  });

  return mission;
};