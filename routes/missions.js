import express from 'express';
import {promisify} from 'util';

const Sequelize = require('sequelize');

const models = require('./../models');

const router = express.Router();

const index = (req, res) => {

	// models.mission
	// 	.findAll()
	// 	.then((missions) => {
	// 		const data = missions.map((user) => {
	// 			return user.get({
	// 				plain: true
	// 			}) } );
	// 		res.send(data);
	//
	// 	})

	models.mission
		.findAll({
			include:[models.agent],
			attributes: [
				'country',
				[Sequelize.fn('count', Sequelize.col('country')), 'isolated_count']
			],

			where: {'$agent.missions_count$': 1},
			group: ['mission.country']
		})
		.then((models) => {
			console.log(models);
			const data = models.map((model) => {
				return model.get({
					plain: true
				}) } );
			res.send(data);

		})
};

router.get('/', index);


module.exports = router;
