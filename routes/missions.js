// This code is just for testing. Not needed for the assignment
import express from 'express';

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
