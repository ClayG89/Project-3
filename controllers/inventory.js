const express = require('express')

const { Food } = require('../models/Inventory')


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




const { Cleaning } = require('../models/Inventory')


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



const { Misc } = require('../models/Inventory')


const miscRouter = express.Router()



miscRouter.get('/', (req, res) => {
    Misc.find().then((miscs) => {
        res.json(miscs);
    });
});

miscRouter.get('/:miscId', (req, res) => {
    Misc.findById(req.params.miscId).then((misc) => {
        res.json(misc);
    });
});

miscRouter.post('/', (req, res) => {
    Misc.create(req.body).then(() => {
        res.status(200).end();
    });
});

miscRouter.put('/:miscId', (req, res) => {
    Misc.findByIdAndUpdate(req.params.miscId, req.body).then(() => {
        res.status(200).end();
    });
});

miscRouter.delete('/:miscId', (req, res) => {
    Misc.findByIdAndDelete(req.params.miscId).then(() => {
        res.status(200).end();
    });
});


module.exports = {
    foodRouter,
    cleaningRouter,
    miscRouter,
  }
