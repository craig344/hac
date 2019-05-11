import React, { Component } from 'react'
import Axios from 'axios';

export default class MenuTable extends Component {
    state = {
        data: {
            columns: ['Name', 'Description', 'Price', 'Category'],
            rows: [
                {
                    'Name': 'Veterinary Assitance',
                    'Description': 50,
                    'Price': '1 Hour',
                    'Category': 12
                }
            ]
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/api/items').then(
            (response) => {
                let items = response.data.data.items;
                let trows = items.map(function (item) {
                    let titem = {
                        'id': item.id,
                        'Name': item.name,
                        'Description': item.description,
                        'Price': item.price,
                        'Category': item.category

                    }
                    return titem;
                });
                var ndata = this.state.data;
                ndata.rows = trows;
                this.setState({ data: ndata });

            }
        );

    }
    render() {

        // Data
        let dataColumns = this.state.data.columns;
        let dataRows = this.state.data.rows;


        var tableHeaders = (<thead>
            <tr>
                {dataColumns.map(function (column) {
                    return <th key={column}>{column}</th>;
                })}
            </tr>
        </thead>);

        var tableBody = dataRows.map(function (row) {
            return (
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title">{row['Name']}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Rs.{row['Price']}/-</h6>
                        <p className="card-text">{row['Description']}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{row['Category']}</small>
                    </div>
                </div>
            );
        });

        // Decorate with Bootstrap CSS
        return (
            <div className="container-fluid">
                <div className="row  card-deck">
                    {tableBody}
                </div>

            </div>
        )
    }
}

const cardStyle = {
    width: "18rem",
    margin: ".5rem"
}
