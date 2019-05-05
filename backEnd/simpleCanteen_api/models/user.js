
var crypto = require('crypto');

var user = {
    connect: function (db) {
        this.db = db;

    },
    register: function (user, callback) {

        console.log("received registration request");
        var salt = genRandomString(16); /** Gives us salt of length 16 */
        var passwordData = sha512(user.password, salt);

        let userObj = {
            name: user.name,
            phone: user.phone,
            salt: passwordData.salt,
            passwordHash: passwordData.passwordHash,
            user_type: "customer"
        }

        let sql = 'INSERT INTO user SET ?';
        let query = this.db.query(sql, userObj, (err, result) => {
            if (err) {
                console.log(err);
                let response = {
                    success: false,
                    error: {
                        code: err.code,
                        msg: err.sqlMessage
                    }
                }
                return callback(response);
            }

            //insert user in customer table
            let customerObj = {
                user_id: result.insertId,
                pay_balance: 0.0
            }

            let sql_customer = 'INSERT INTO client_user SET ?';
            let query_customer = this.db.query(sql_customer, customerObj, (err, result) => {
                if (err) {
                    console.log(err);
                    let response = {
                        success: false,
                        error: {
                            code: err.code,
                            msg: err.sqlMessage
                        }
                    }
                    return callback(response);
                }

                let response = {
                    success: true,
                    data: {
                        msg: "New User Created Successfully"
                    }
                }
                return callback(response);

            });

        });

    },
    login: function (user, callback) {
        //check if user with phone and password exists in table



        let sql_salt = 'SELECT salt FROM user WHERE phone = ?';
        let query_salt = this.db.query(sql_salt, user.phone, (err, result) => {
            if (err) {
                console.log(err);
                let response = {
                    success: false,
                    error: {
                        code: err.code,
                        msg: err.sqlMessage
                    }
                }
                return callback(response);
            }

            if (result.length == 0) {

                let response = {
                    success: false,
                    error: {
                        msg: "No User Found"
                    }
                }
                return callback(response);
            }

            let salt = result[0].salt;

            var passwordData = sha512(user.password, salt);
            let sql_password = 'SELECT id FROM user WHERE phone = ? AND passwordHash = ?';
            let query_salt = this.db.query(sql_password, [user.phone, passwordData.passwordHash], (err, result) => {
                if (err) throw err;

                console.log(result);
                if (result.length == 0) {
                    let response = {
                        success: false,
                        error: {
                            msg: "No User Found"
                        }
                    }
                    return callback(response);
                } else {
                    let response = {
                        success: true,
                        data: {
                            msg: "user found.",
                            user_id: result
                        }
                    }
                    return callback(response);
                }
            });

        });
    }
}

module.exports = user;

/* ---------- Utility Functions ---------- */

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0, length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value
    };
};