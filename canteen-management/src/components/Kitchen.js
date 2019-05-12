import React, { Component } from 'react'
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';

export default class Kitchen extends Component {
    state={
        details_id:null
    }

    changeOrder = (id)=>{
        this.setState({details_id:id})
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-6">
                    <h2>Orders</h2>
                    <OrderList changeOrder={this.changeOrder}/>
                </div>
                <div className="col-6">
                    <h2>Order Detail</h2>
                    <OrderDetail details_id={this.state.details_id}/>
                </div>
                </div>
            </div>
        )
    }
}
