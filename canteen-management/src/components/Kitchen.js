import React, { Component } from 'react'
import OrderList from './OrderList';

export default class Kitchen extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-6">
                    <OrderList />
                </div>
                </div>
            </div>
        )
    }
}
