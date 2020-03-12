const express = require('express')

const Inventory = require('../models/Inventory.js')


const inventoryRouter = express.Router()



inventoryRouter.get('/', (req, res) => {
    Inventory.find().then((inventories) => {
        res.json(inventories);
    });
});

inventoryRouter.get('/:categoryId', (req, res) => {
    Inventory.findById(req.params.inventoryId).then((inventory) => {
        res.json(inventory);
    });
});

inventoryRouter.post('/', (req, res) => {
    Inventory.create(req.body).then(() => {
        res.status(200).end();
    });
});

inventoryRouter.put('/:inventoryId', (req, res) => {
    Inventory.findByIdAndUpdate(req.params.inventoryId, req.body).then(() => {
        res.status(200).end();
    });
});

inventoryRouter.delete('/:inventoryId', (req, res) => {
    Inventory.findByIdAndDelete(req.params.inventoryId).then(() => {
        res.status(200).end();
    });
});

module.exports = {
    inventoryRouter
  }