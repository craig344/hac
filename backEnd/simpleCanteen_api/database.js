
const mysql = require('mysql');
//Create a connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
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



