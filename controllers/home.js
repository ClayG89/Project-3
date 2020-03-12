
const express = require('express')


const Home = require('../models/Home.js')


const homeRouter = express.Router()


homeRouter.get('/', (req, res) => {
    Home.find().then((homes) => {
        res.json(homes);
    });
});

homeRouter.get('/:homeId', (req, res) => {
    Home.findById(req.params.homeId).then((home) => {
        res.json(home);
    });
});

homeRouter.post('/', (req, res) => {
    Home.create(req.body).then(() => {
        res.status(200).end();
    });
});

homeRouter.put('/:homeId', (req, res) => {
    Home.findByIdAndUpdate(req.params.homeId, req.body).then(() => {
        res.status(200).end();
    });
});

homeRouter.delete('/:homeId', (req, res) => {
    Homee.findByIdAndDelete(req.params.homeId).then(() => {
        res.status(200).end();
    });
});

homeRouter.get('/', (req, res) => {
  res.json('hello world')
})


module.exports = {
  homeRouter
}