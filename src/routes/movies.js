const {Router} = require('express');
const router = Router();

const movies = require('../sample.json');


router.get('/', (req, res) => {
    res.send(movies)
});

router.post('/', (req, res) => {
    const {id, tittle, director, year, rating} = req.body;
    if (tittle && director && year && rating) {
        res.json('saved');
    } else {
        res.send('Wrong request');
    }
    }
);


module.exports = router; 