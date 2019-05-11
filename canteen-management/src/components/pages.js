import React, { Component } from 'react'

import Navbar from "./Navbar";

import Menu from './Menu';
import Cart from './cart';
import Orders from './Orders';
import Kitchen from './Kitchen';

export default class pages extends Component {
    render() {
       
        if (this.props.page === "menu") {
            return (
                <div>
                    <Navbar />
                    <Menu />
                </div>
            )
        } else if (this.props.page === "cart") {
            return (
                <div>
                    <Navbar />
                    <Cart />
                </div>
            )
        } else if (this.props.page === "orders") {
            return (
                <div>
                    <Navbar />
                    <Orders />
                </div>
            )
        }else if (this.props.page === "kitchen") {
            return (
                <div>
                    <Navbar />
                    <Kitchen />
                </div>
            )
        }
    }
}
