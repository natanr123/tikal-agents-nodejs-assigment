import express from 'express';
import { promisify } from 'util';
import '../config/sequelize'

const router = express.Router();

const index = (req, res) => {
    console.log('start');
    res.send('dddddddddddddddd');
};

router.get('/',  index);






module.exports = router;