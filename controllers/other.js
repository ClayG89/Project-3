const express = require('express')

const Utility = require('../models/Other')


const utilityRouter = express.Router()



utilityRouter.get('/', (req, res) => {
    Utility.find().then((utilities) => {
        res.json(utilities);
    });
});

utilityRouter.get('/:utilityId', (req, res) => {
    Utility.findById(req.params.utilityId).then((utility) => {
        res.json(utility);
    });
});

utilityRouter.post('/', (req, res) => {
    Utility.create(req.body).then(() => {
        res.status(200).end();
    });
});

utilityRouter.put('/:utilityId', (req, res) => {
    Utility.findByIdAndUpdate(req.params.utilityId, req.body).then(() => {
        res.status(200).end();
    });
});

utilityRouter.delete('/:utilityId', (req, res) => {
    Utility.findByIdAndDelete(req.params.utilityId).then(() => {
        res.status(200).end();
    });
});




const Rent = require('../models/Other')


const rentRouter = express.Router()



rentRouter.get('/', (req, res) => {
    Rent.find().then((rents) => {
        res.json(rents);
    });
});

rentRouter.get('/:rentId', (req, res) => {
    Rent.findById(req.params.rentId).then((rent) => {
        res.json(rent);
    });
});

rentRouter.post('/', (req, res) => {
    Rent.create(req.body).then(() => {
        res.status(200).end();
    });
});

rentRouter.put('/:rentId', (req, res) => {
    Rent.findByIdAndUpdate(req.params.rentId, req.body).then(() => {
        res.status(200).end();
    });
});

rentRouter.delete('/:rentId', (req, res) => {
    Rent.findByIdAndDelete(req.params.rentId).then(() => {
        res.status(200).end();
    });
});






module.exports = {
    utilityRouter,
    rentRouter,
   
  }
