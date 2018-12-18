import express from 'express';
import {promisify} from 'util';

const Sequelize = require('sequelize');

const models = require('./../models');

const router = express.Router();

function index(req, res) {
	models.mission
		.findAll()
		.then((data) => {
			res.send(data);
		});
}



router.get('/', index);


module.exports = router;
