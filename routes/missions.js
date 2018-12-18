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

	models.agent
		.findAll()
		.then((models) => {
			const data = models.map((model) => {
				return model.get({
					plain: true
				}) } );
			res.send(data);

		})

	// https://stackoverflow.com/questions/22627258/how-does-group-by-works-in-sequelize
	// const query = {
	//     attributes: ['code', [Sequelize.fn('count', Sequelize.col('code')), 'missions_count']],
	//     group: ['code'],
	//     having: Sequelize.literal('count(code) = 1'),
	// };


	/*
	models.mission.findAll(query)
			.then((usersResponse) => {
					const isolatedAgents = usersResponse.map((user) => {
					return user.get({
							plain: true
					}).code } );
					return isolatedAgents })
			.then((isolatedAgents) => {
					console.log('ooooooooooo: ', isolatedAgents);
					res.send(isolatedAgents);
			});
	*/

};

router.get('/', index);


module.exports = router;
