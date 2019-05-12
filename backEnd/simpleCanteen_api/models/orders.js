
var orders = {
    create: function (db,order, callback) {

        let orderObj = {
            customer_id: order.customer_id,
            total: order.total,
            item_count: order.item_count
           
        }

        let sql = 'INSERT INTO orders SET ?';
        let query = db.query(sql, orderObj, (err, result) => {
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
                    msg: "New Order Created Successfully",
                    order_id:result.insertId
                }
            }
            return callback(response);

        });
    },
    getAll: function (db,callback) {
        let sql = 'SELECT * FROM orders';
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No orders Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "orders found.",
                        orders: result
                    }
                }
                return callback(response);
            }
        });
    },
    getbyId: function (db,order, callback) {
        let sql = 'SELECT * FROM orders where id =?';
        let query = db.query(sql, [order.id], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No order Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "order found.",
                        item: result
                    }
                }
                return callback(response);
            }
        });
    },
    getbyCustomerId: function (db,order, callback) {
        let sql = 'SELECT * FROM orders where customer_id =?';
        let query = db.query(sql, [order.customer_id], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No order Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "order found.",
                        item: result
                    }
                }
                return callback(response);
            }
        });
    },
    getbyStatus: function (db,order, callback) {
        let sql = 'SELECT * FROM orders where status =?';
        let query = db.query(sql, [order.status], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No order Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "order found.",
                        item: result
                    }
                }
                return callback(response);
            }
        });
    },
    update: function (db,order, callback) {     

        let sql = 'UPDATE orders SET total = ?,item_count = ?,status=? where id = ?';
        let query = db.query(sql, [order.total, order.item_count, order.status, order.id], (err, result) => {
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
                    msg: "Order Updated Successfully"
                }
            }
            return callback(response);

        });

    },
    updateStatus: function (db,order, callback) {     

        let sql = 'UPDATE orders SET status=? where id = ?';
        let query = db.query(sql, [order.status, order.id], (err, result) => {
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
                    msg: "Order Updated Successfully"
                }
            }
            return callback(response);

        });

    },
    getOrderDetailsbyId: function (order, callback) {
        let sql = 'SELECT orders.id,orders.created_at,orders.total,order_items.quantity,order_items.rate,item.name FROM orders join order_items join item ON orders.id = order_items.order_id AND item.id = order_items.item_id where orders.id =?';
        let query = db.query(sql, [order.id], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No order Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "order found.",
                        item: result
                    }
                }
                return callback(response);
            }
        });
    },
    getbyDate: function (order, callback) {
        let sql = 'SELECT * from orders where DATE_FORMAT(`created_at`, "%Y-%m-%d") = ?';
        let query = db.query(sql, [order.date], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No order Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "order found.",
                        item: result
                    }
                }
                return callback(response);
            }
        });
    },
    getSalesPerDay: function (range, callback) {
        let sql = "select date(`created_at`) as date,sum(`total`) as sales from orders where date(`created_at`) >= date(?) AND date(`created_at`) <= date(?) group by date(`created_at`);";
        let query = db.query(sql, [range.startDate,range.endDate], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                let response = {
                    success: false,
                    error: {
                        msg: "No order Found"
                    }
                }
                return callback(response);
            } else {
                let response = {
                    success: true,
                    data: {
                        msg: "order found.",
                        item: result
                    }
                }
                return callback(response);
            }
        });
    }

}

module.exports = orders;