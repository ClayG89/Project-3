const express = require('express')

const Category = require('../models/Category.js')


const categoryRouter = express.Router()



categoryRouter.get('/', (req, res) => {
    Category.find().then((categories) => {
        res.json(categories);
    });
});

categoryRouter.get('/:categoryId', (req, res) => {
    Category.findById(req.params.categoryId).then((category) => {
        res.json(category);
    });
});

categoryRouter.post('/', (req, res) => {
    Category.create(req.body).then(() => {
        res.status(200).end();
    });
});

categoryRouter.put('/:categoryId', (req, res) => {
    Category.findByIdAndUpdate(req.params.categoryId, req.body).then(() => {
        res.status(200).end();
    });
});

categoryRouter.delete('/:categoryId', (req, res) => {
    Category.findByIdAndDelete(req.params.categoryId).then(() => {
        res.status(200).end();
    });
});