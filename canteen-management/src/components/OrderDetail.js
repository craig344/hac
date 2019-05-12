import React, { Component } from 'react'

import Axios from 'axios';

export default class OrderDetail extends Component {

    state = {
        data: {
            columns: ['name', 'quantity'],
            rows: []
        },
        order_id: null
    }
    componentDidMount() {
        this.loadData(this.props.details_id)

    }

    loadData = (id) => {
        console.log("loadinf");
        
        Axios.get('http://localhost:4000/api/orderItems/byOrderId?order_id=' + id).then(
            (response) => {
                if (response.data.success) {
                    let items = response.data.data.item;
                    let trows = items.map(function (item) {
                        let titem = {
                            'id': item.id,
                            'name': item.name,
                            'quantity': item.quantity
                        }
                        return titem;
                    });
                    var ndata = this.state.data;
                    ndata.rows = trows;
                    this.setState({ data: ndata });
                    this.setState({ order_id: id });
                }
            }
        );
    }

    render() {
         if(this.props.details_id!=this.state.order_id)   {
            this.loadData(this.props.details_id);
         }
        //
        // Data
        var dataColumns = this.state.data.columns;
        var dataRows = this.state.data.rows;

        var tableHeaders = (<thead>
            <tr>
                {dataColumns.map(function (column) {
                    return <th key={column}>{column}</th>;
                })}
            </tr>
        </thead>);

        var tableBody = dataRows.map((row) => {
            return (
                <tr key={row['id']} >
                    {dataColumns.map((column) => {
                        return <td key={row[column]}>{row[column]}</td>;
                    })}
                </tr >);
        });

        // Decorate with Bootstrap CSS
        return (<table className="table table-bordered table-hover" width="100%" >
            {tableHeaders}
            < tbody >
                {tableBody}
            </tbody>
        </table >)
    }
}
