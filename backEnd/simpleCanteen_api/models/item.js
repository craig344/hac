

var item = {
    create: function (db,item, callback) {

        let itemObj = {
            name: item.name,
            description: item.description,
            price: item.price,
            category: item.category
        }

        let sql = 'INSERT INTO item SET ?';
        let query = db.query(sql, itemObj, (err, result) => {
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
                    msg: "New Item Created Successfully"
                }
            }
            return callback(response);

        });
    },
    getAll: function (db,callback) {
        let sql = 'SELECT * FROM item';
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No Items Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "Items found.",
                        items: result
                    }
                }
                return callback(response);
            }
        });
    },
    getbyId: function (db,item, callback) {
        let sql = 'SELECT * FROM item where id =?';
        let query = db.query(sql, [item.id], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No Item Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "item found.",
                        item: result
                    }
                }
                return callback(response);
            }
        });
    },
    update: function (db,item, callback) {     

        let sql = 'UPDATE item SET name = ?,description = ?,price=?,category=?,available=? where id = ?';
        let query = db.query(sql, [item.name, item.description, item.price, item.category, item.available, item.id], (err, result) => {
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
                    msg: "Item Updated Successfully"
                }
            }
            return callback(response);

        });

    },
    deletebyId: function (db,item, callback) {
        let sql = 'DELETE FROM item where id =?';
        let query = db.query(sql, [item.id], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No Item Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "Item deleted.",
                        item: result
                    }
                }
                return callback(response);
            }
        });

    }

}

module.exports = item;