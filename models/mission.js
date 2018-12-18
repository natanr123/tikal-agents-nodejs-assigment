'use strict';

module.exports = (sequelize, DataTypes) => {
  const mission = sequelize.define('mission', {
    country: DataTypes.STRING,
    address: DataTypes.STRING,
    mission_date: DataTypes.DATE
  }, {
    timestamps: false,
    hooks: {
      afterCreate: (mission, options) => {
        console.log('afterCreateafterCreateafterCreateafterCreate: ',  mission.agent_code);
        return sequelize.models.agent
          .findOne({ where: { code: mission.agent_code } })
          .then((agent) => {
            return agent.update({ missions_count: sequelize.literal('missions_count + 1') })
          });

      }
    }
  });
  mission.associate = function (models) {
    mission.belongsTo(models.agent, {foreignKey: 'agent_code', targetKey: 'code', as: 'agent'});
    // associations can be defined here
  };


  return mission;
};
