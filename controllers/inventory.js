const express = require('express')

const Food = require('../models/Food.js/index.js')


const foodRouter = express.Router()



foodRouter.get('/', (req, res) => {
    Food.find().then((foods) => {
        res.json(foods);
    });
});

foodRouter.get('/:foodId', (req, res) => {
    Food.findById(req.params.foodId).then((food) => {
        res.json(food);
    });
});

foodRouter.post('/', (req, res) => {
    Food.create(req.body).then(() => {
        res.status(200).end();
    });
});

foodRouter.put('/:foodId', (req, res) => {
    Food.findByIdAndUpdate(req.params.foodId, req.body).then(() => {
        res.status(200).end();
    });
});

foodRouter.delete('/:foodId', (req, res) => {
    Food.findByIdAndDelete(req.params.foodId).then(() => {
        res.status(200).end();
    });
});




const Cleaning = require('../models/Cleaning.js/index.js.')


const cleaningRouter = express.Router()



cleaningRouter.get('/', (req, res) => {
    Cleaning.find().then((cleanings) => {
        res.json(cleanings);
    });
});

cleaningRouter.get('/:cleaningId', (req, res) => {
    Cleaning.findById(req.params.cleaningId).then((cleaning) => {
        res.json(cleaning);
    });
});

cleaningRouter.post('/', (req, res) => {
    Cleaning.create(req.body).then(() => {
        res.status(200).end();
    });
});

cleaningRouter.put('/:cleaningId', (req, res) => {
    Cleaning.findByIdAndUpdate(req.params.cleaningId, req.body).then(() => {
        res.status(200).end();
    });
});

cleaningRouter.delete('/:cleaningId', (req, res) => {
    Cleaning.findByIdAndDelete(req.params.cleaningId).then(() => {
        res.status(200).end();
    });
});



const Other = require('../models/Other.js/index.js.')


const otherRouter = express.Router()



otherRouter.get('/', (req, res) => {
    Other.find().then((others) => {
        res.json(others);
    });
});

otherRouter.get('/:otherId', (req, res) => {
    Other.findById(req.params.otherId).then((other) => {
        res.json(other);
    });
});

otherRouter.post('/', (req, res) => {
    Other.create(req.body).then(() => {
        res.status(200).end();
    });
});

otherRouter.put('/:otherId', (req, res) => {
    Other.findByIdAndUpdate(req.params.otherId, req.body).then(() => {
        res.status(200).end();
    });
});

otherRouter.delete('/:otherId', (req, res) => {
    Other.findByIdAndDelete(req.params.otherId).then(() => {
        res.status(200).end();
    });
});


module.exports = {
    foodRouter,
    cleaningRouter,
    otherRouter,
  }
