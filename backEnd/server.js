const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_ITEM_QUERY = 'SELECT * FROM item';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simplecanteen'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

//console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /item to see item')
});

app.get('/item/add', (req, res) => {
    const {name, description, price } = req.query;
    const INSERT_ITEM_QUERY = `INSERT INTO item (name, description, price) VALUES('${name}', '${description}', ${price})`
    connection.query(INSERT_ITEM_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        }
        else {
            return res.send("Successfully added the item")
        }
    });
});

app.get('/item', (req, res) => {
    connection.query(SELECT_ALL_ITEM_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.listen(4000, () => {
    console.log('Products server listening on port 4000')
});