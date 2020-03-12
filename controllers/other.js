
const express = require('express')


const Other = require('../models/Other.js')


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
    Other.findByIdAndDelete(req.params.homeId).then(() => {
        res.status(200).end();
    });
});

otherRouter.get('/', (req, res) => {
  res.json('hello world')
})


module.exports = {
  otherRouter
}