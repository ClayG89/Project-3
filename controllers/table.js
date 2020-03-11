const express = require('express')

const Table = require('../models/Table.js')


const tableRouter = express.Router()



tableRouter.get('/', (req, res) => {
    Table.find().then((tables) => {
        res.json(tables);
    });
});

tableRouter.get('/:tableId', (req, res) => {
    Table.findById(req.params.tableId).then((table) => {
        res.json(table);
    });
});

tableRouter.post('/', (req, res) => {
    Table.create(req.body).then(() => {
        res.status(200).end();
    });
});

tableRouter.put('/:tableId', (req, res) => {
    Table.findByIdAndUpdate(req.params.tableId, req.body).then(() => {
        res.status(200).end();
    });
});

tableRouter.delete('/:tableId', (req, res) => {
    Table.findByIdAndDelete(req.params.tableId).then(() => {
        res.status(200).end();
    });
});