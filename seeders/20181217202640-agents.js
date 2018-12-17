'use strict';
const models = require('./../models');
const rawData = require('./../config/fixture-data');

module.exports = {
	up: (queryInterface, Sequelize) => {

		/*
		const agentsCodesHash = {};
		rawData.forEach((row) => {
			agentsCodesHash[row.agent] = 1;
		});
		const codes = Object.keys(agentsCodesHash);
		const ps = codes.map((code) => {
			return models.agent.create({code})
		});
		return Promise.all(ps);
		*/
		return Promise.resolve(true);
	},

	down: (queryInterface, Sequelize) => {
	}
};


