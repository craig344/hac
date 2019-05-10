const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = require('./../database');

const { check, validationResult } = require('express-validator/check');

/**--------- User Routes------------------------------------ */

//get a list on users from the database
router.get('/users', function (req, res) {
    res.send({ type: 'GET' });
});

//login a user 
router.post('/users/login', function (req, res) {
    var user = {
        id_card_no: req.body.id_card_no,
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
    check('id_card_no')
        .isLength({ min: 10 }).withMessage('must be at least 10 chars long'),
    // password must be at least 5 chars long
    check('password')
        .isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    check('type')
        .isLength({ min: 1 }).withMessage('user type is required'),
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var user = {
        name: req.body.name,
        id_card_no: req.body.id_card_no,
        password: req.body.password,
        type:req.body.type
    };
    const userModel = require('./../models/user');
    userModel.connect(db);
    userModel.create(user, function (response) {
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

/**--------- Item Routes------------------------------------ */

//add a new user to the db
router.post('/item/create', [
    // username must be an email
    check('name')
        .isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    check('price')
        .isInt().withMessage('must be an integer'),
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var item = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category:req.body.category
    };
    const itemModel = require('./../models/item');
    
    itemModel.create(db,item, function (response) {
        res.send(response);
    });

});


//get a list of all items from the database
router.get('/items', function (req, res) {
    const itemModel = require('./../models/item');
    
    itemModel.getAll(db, function (response) {
        res.send(response);
    });
});

//get an  item by id from the database
router.get('/item', function (req, res) {
    const itemModel = require('./../models/item');
    var item ={
        id: req.query.id
    };
    itemModel.getbyId(db, item,function (response) {
        res.send(response);
    });
});

//update an item by id
router.put('/item',function(req,res){
    const itemModel = require('./../models/item');
    var item ={
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        available: req.body.available,
    };
    itemModel.update(db, item,function (response) {
        res.send(response);
    });
    
});

module.exports = router;