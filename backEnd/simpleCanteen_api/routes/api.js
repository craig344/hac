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
        type: req.body.type
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

//add a new item to the db
router.post('/item/create', [
    // name must be an email
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
        category: req.body.category
    };
    const itemModel = require('./../models/item');

    itemModel.create(db, item, function (response) {
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
    var item = {
        id: req.query.id
    };
    itemModel.getbyId(db, item, function (response) {
        res.send(response);
    });
});

//update an item by id
router.put('/item', function (req, res) {
    const itemModel = require('./../models/item');
    var item = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        available: req.body.available,
    };
    itemModel.update(db, item, function (response) {
        res.send(response);
    });

});

/**--------- Order Routes------------------------------------ */

//add a new order to the db
router.post('/order', [
    // name must be an email
    check('customer_id')
        .isInt().withMessage('must be an integer'),
    check('total')
        .isNumeric().withMessage('must be a Number'),
    check('item_count')
        .isInt().withMessage('must be an Integer'),
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var order = {
        customer_id: req.body.customer_id,
        total: req.body.total,
        item_count: req.body.item_count
    };
    const orderModel = require('./../models/orders');

    orderModel.create(db, order, function (response) {
        res.send(response);
    });

});


//get a list of all orders from the database
router.get('/orders', function (req, res) {
    const orderModel = require('./../models/orders');

    orderModel.getAll(db, function (response) {
        res.send(response);
    });
});

//get an  order by order_id from the database
router.get('/order', function (req, res) {
    const orderModel = require('./../models/orders');
    var order = {
        id: req.query.id
    };
    orderModel.getbyId(db, order, function (response) {
        res.send(response);
    });
});

//get  orders by customer_id from the database
router.get('/order/byCustomer', function (req, res) {
    const orderModel = require('./../models/orders');
    var order = {
        customer_id: req.query.customer_id
    };
    orderModel.getbyCustomerId(db, order, function (response) {
        res.send(response);
    });
});
//get  orders by order status from the database
router.get('/order/byStatus', function (req, res) {
    const orderModel = require('./../models/orders');
    var order = {
        status: req.query.status
    };
    orderModel.getbyStatus(db, order, function (response) {
        res.send(response);
    });
});


//update an order by id
router.put('/order', [
    // name must be an email
    check('id')
        .isInt().withMessage('must be an integer'),
    check('total')
        .isNumeric().withMessage('must be a Number'),
    check('item_count')
        .isInt().withMessage('must be an Integer'),
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const orderModel = require('./../models/orders');
    var order = {
        id: req.body.id,
        total: req.body.total,
        item_count: req.body.item_count,
        status: req.body.status
    };
    orderModel.update(db, order, function (response) {
        res.send(response);
    });

});

//update an order status by id
router.put('/order/status', [
    // name must be an email
    check('id')
    .isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('status')
    .isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const orderModel = require('./../models/orders');
    var order = {
        id: req.body.id,
        status: req.body.status
    };
    orderModel.updateStatus(db, order, function (response) {
        res.send(response);
    });

});

/**--------- Order Item Routes------------------------------------ */

//add a new orderItem to the db
router.post('/orderItem', [
    check('order_id')
        .isInt().withMessage('must be an integer'),
    check('item_id')
        .isInt().withMessage('must be an integer'),
    check('quantity')
        .isInt().withMessage('must be a integer'),
    check('rate')
        .isNumeric().withMessage('must be an Number'),
], function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var orderItem = {
        order_id: req.body.order_id,
        item_id: req.body.item_id,
        quantity: req.body.quantity,
        rate: req.body.rate
    };
    const orderItemModel = require('./../models/order_items');

    orderItemModel.create(db, orderItem, function (response) {
        res.send(response);
    });

});

//add a new orderItem array to the db
router.post('/orderItems', function (req, res) {
   
    var orderItems = req.body;
   
    const orderItemModel = require('./../models/order_items');

    orderItemModel.createMultiple(db, orderItems, function (response) {
        res.send(response);
    });

});


//get   orderItems by order_id from the database
router.get('/orderItems/byOrderId', function (req, res) {
    const orderItemModel = require('./../models/order_items');
    var orderItems = {
        order_id: req.query.order_id
    };
    orderItemModel.getbyOrderId(db, orderItems, function (response) {
        res.send(response);
    });
});

module.exports = router;