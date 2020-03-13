const express = require('express')

const { Payroll } = require('../models/Personnel')


const payrollRouter = express.Router()



payrollRouter.get('/', (req, res) => {
    Payroll.find().then((payrolls) => {
        res.json(payrolls);
    });
});

payrollRouter.get('/:payrollId', (req, res) => {
    Payroll.findById(req.params.payrollId).then((payroll) => {
        res.json(payroll);
    });
});

payrollRouter.post('/', (req, res) => {
    Payroll.create(req.body).then(() => {
        res.status(200).end();
    });
});

payrollRouter.put('/:payrollId', (req, res) => {
    Payroll.findByIdAndUpdate(req.params.payrollId, req.body).then(() => {
        res.status(200).end();
    });
});

payrollRouter.delete('/:payollId', (req, res) => {
    Payroll.findByIdAndDelete(req.params.payrollId).then(() => {
        res.status(200).end();
    });
});




const { Vacation } = require('../models/Personnel')


const vacationRouter = express.Router()



vacationRouter.get('/', (req, res) => {
    Vacation.find().then((vacations) => {
        res.json(vacations);
    });
});

vacationRouter.get('/:vacationId', (req, res) => {
    Vacation.findById(req.params.vacationId).then((vacation) => {
        res.json(vacation);
    });
});

vacationRouter.post('/', (req, res) => {
    Vacation.create(req.body).then(() => {
        res.status(200).end();
    });
});

vacationRouter.put('/:vacationId', (req, res) => {
    Vacation.findByIdAndUpdate(req.params.vacationId, req.body).then(() => {
        res.status(200).end();
    });
});

vacationRouter.delete('/:vacationId', (req, res) => {
    Vacation.findByIdAndDelete(req.params.vacationId).then(() => {
        res.status(200).end();
    });
});



const { Benefit } = require('../models/Personnel')


const benefitRouter = express.Router()



benefitRouter.get('/', (req, res) => {
    Benefit.find().then((benefits) => {
        res.json(benefits);
    });
});

benefitRouter.get('/:benefitId', (req, res) => {
    Benefit.findById(req.params.benefitId).then((benefit) => {
        res.json(benefit);
    });
});

benefitRouter.post('/', (req, res) => {
    Benefit.create(req.body).then(() => {
        res.status(200).end();
    });
});

benefitRouter.put('/:benefitId', (req, res) => {
    Benefit.findByIdAndUpdate(req.params.benifitId, req.body).then(() => {
        res.status(200).end();
    });
});

benefitRouter.delete('/:benefitId', (req, res) => {
    Benefit.findByIdAndDelete(req.params.benefitId).then(() => {
        res.status(200).end();
    });
});


module.exports = {
    payrollRouter,
    vacationRouter,
    benefitRouter,
  }