import express from 'express';
import { promisify } from 'util';
import models from './../models'
const Sequelize = require('sequelize');

const router = express.Router();

const index = (req, res) => {
    // https://stackoverflow.com/questions/22627258/how-does-group-by-works-in-sequelize
    const query = {
        attributes: ['code', [Sequelize.fn('count', Sequelize.col('code')), 'missions_count']],
        group: ['code'],
        having: Sequelize.literal('count(code) = 1'),
    };
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


};

router.get('/',  index);






module.exports = router;