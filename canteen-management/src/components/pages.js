import React, { Component } from 'react'
import {  Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import Menu from './Menu';
import Cart from './cart';
import Orders from './Orders';
import Kitchen from './Kitchen';

export default class Pages extends Component {
    render() {
        return (
            <div>
                <Navbar user={this.props.user} logout={this.props.logout}/>                
                <Switch>
                    <Route path={`/menu`} component={Menu} />
                    <Route path={`/cart`} component={Cart} />
                    <Route path={`/orders`} component={Orders} />
                    <Route path={`/kitchen`} component={Kitchen} />
                </Switch>
            </div>
        )
    }
}
