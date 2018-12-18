import express from 'express';
import axios from 'axios';

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
			const ordered = isolatedArr.sort((a,b) => b.isolatedCount - a.isolatedCount)
			res.send(ordered[0]);
		})
};

const findClosest = (req, res) => {
	const GOOGLE_API_KEY = process.env.GOOGLE_AP_KEY;
	const target = req.body.target;
	const apiUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json';
	models.mission
		.findAll()
		.then((models) => {
			const promisesArr = models.map((model)=>{
				const url = `${apiUrl}?origins=${target}&destinations=${model.address}, ${model.country}&departure_time=now&key=${GOOGLE_API_KEY}`;
				return axios.get(url);
			});
			return Promise.all(promisesArr);
		})
		.then((responses)=> {
			return responses
				.map((response) => {
					return response.data.rows[0].elements[0].status === 'OK' ?
						{
							distance: response.data.rows[0].elements[0].distance.value, address: response.data.destination_addresses[0]
						} : null;
				})
				.filter(x => x)
				.sort((a,b) => a.distance - b.distance)
		})
		.then((data)=>{
			res.send(data);
		})

};

router.get('/countries-by-isolation', countriesByIsolation);
router.post('/find-closest', findClosest);


module.exports = router;
