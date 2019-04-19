const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = require('./../database');

const { check, validationResult } = require('express-validator/check');

//get a list on users from the database
router.get('/users', function (req, res) {
    res.send({ type: 'GET' });
});

//login a user 
router.post('/users/login', function (req, res) {
    var user = {
        phone: req.body.phone,
        password: req.body.password
    };
    const userModel = require('./../models/user');
    userModel.connect(db);
    userModel.login(user, function (response) {
        res.send(response);
    });
});

//add a new user to the db
router.post('/users/register', [
    // username must be an email
    check('name')
        .isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    check('phone')
        .isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
    // password must be at least 5 chars long
    check('password')
        .isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var user = {
        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password
    };
    const userModel = require('./../models/user');
    userModel.connect(db);
    userModel.register(user, function (response) {
        res.send(response);
    });

});

//update a ninja in the db
router.put('/users/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

//delete a nninja from the db
router.delete('/users/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router;