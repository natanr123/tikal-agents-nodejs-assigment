import express from 'express';
import { promisify } from 'util';
import models from './../models'

const router = express.Router();

const index = (req, res) => {
    // https://stackoverflow.com/questions/22627258/how-does-group-by-works-in-sequelize
    models.agent.findAll().then((usersResponse) => {

        const users = usersResponse.map((user) => {
            return user.get({
                plain: true
            })
        });
        console.log(users);
        res.send(users);
    });


};

router.get('/',  index);






module.exports = router;