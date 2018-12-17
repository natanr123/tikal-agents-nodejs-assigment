'use strict';
const rawData = require('./../config/fixture-data');
const models = require('./../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log('ssssssssssssssssss');

    const ps = rawData.map((row) => {
      const data = { agent: models.agent.find({code: row.agent_code}), country: row.country, address: row.address, mission_date: row.date };
      return models.mission.create(data, { include: [{model: models.agent, as: 'agent'}] });
    });
    return Promise.all(ps);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
