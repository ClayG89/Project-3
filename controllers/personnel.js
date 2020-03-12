const express = require('express')

const Personnel = require('../models/Personnel.js')


const personnelRouter = express.Router()



personnelRouter.get('/', (req, res) => {
    Table.find().then((personnels) => {
        res.json(personnels);
    });
});

personnelRouter.get('/:personnelId', (req, res) => {
    Personnel.findById(req.params.personnelId).then((personnel) => {
        res.json(personnel);
    });
});

personnelRouter.post('/', (req, res) => {
    Personnel.create(req.body).then(() => {
        res.status(200).end();
    });
});

personnelRouter.put('/:personnelId', (req, res) => {
    Personnel.findByIdAndUpdate(req.params.personnelId, req.body).then(() => {
        res.status(200).end();
    });
});

personnelRouter.delete('/:tableId', (req, res) => {
    Personnel.findByIdAndDelete(req.params.tableId).then(() => {
        res.status(200).end();
    });
});

module.exports = {
    personnelRouter
  }