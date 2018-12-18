import express from 'express';

const Sequelize = require('sequelize');

const models = require('./../models');

const router = express.Router();

const countriesByIsolation = (req, res) => {

	models.mission
		.findAll({
			include:[models.agent],
			attributes: [
				'country',
				[Sequelize.fn('count', Sequelize.col('*')), 'isolated_count'],

			],
			where: {'$agent.missions_count$': 1},
			group: ['mission.country'],
		})
		.then((models) => {
			return models.map((model) => {
				const plain = model.get({plain: true});
				return {country: plain.country, isolatedCount: plain.isolated_count} } );
		})
		.then((isolatedArr)=>{
			// The order should have been done by sql but I had some issues with Sequelize
			const orderd = isolatedArr.sort((a,b) => b.isolatedCount - a.isolatedCount)
			res.send(orderd[0]);
		})
};

router.get('/countries-by-isolation', countriesByIsolation);


module.exports = router;
