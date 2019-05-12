import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import Menu from './Menu';
import Cart from './cart';
import Orders from './Orders';
import Kitchen from './Kitchen';

export default class Pages extends Component {
    render() {
        return (
            <div>
                <Navbar />                
                <Switch>
                    <Route path={`${this.props.match.url}/menu`} component={Menu} />
                    <Route path={`${this.props.match.url}/cart`} component={Cart} />
                    <Route path={`${this.props.match.url}/orders`} component={Orders} />
                    <Route path={`${this.props.match.url}/kitchen`} component={Kitchen} />
                </Switch>
            </div>
        )
    }
}
