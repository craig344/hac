
const mysql = require('mysql');
//Create a connection
const db = mysql.createConnection({
    host: '13.127.178.97',
    user: 'admin',
    password: 'pass123@',
    database: 'simplecanteen'
});

//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');

});

module.exports = db;



