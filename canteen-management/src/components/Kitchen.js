import React, { Component } from 'react'
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';

export default class Kitchen extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-6">
                    <h2>Orders</h2>
                    <OrderList />
                </div>
                <div className="col-6">
                    <h2>Order Detail</h2>
                    <OrderDetail />
                </div>
                </div>
            </div>
        )
    }
}
