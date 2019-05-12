import React, { Component } from 'react'

export default class OrderList extends Component {
  state = {
    data: {
      columns: ['#Id', 'Customer Name', '#Items'],
      rows: [{
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',        
      }]
    }
  }
  render() {

    // Data
    var dataColumns = this.state.data.columns;
    var dataRows = this.state.data.rows;

    var tableHeaders = (<thead>
      <tr>
        {dataColumns.map(function (column) {
          return <th>{column}</th>;
        })}
      </tr>
    </thead>);

    var tableBody = dataRows.map(function (row) {
      return (
        <tr>
          {dataColumns.map(function (column) {
            return <td>{row[column]}</td>;
          })}
        </tr>);
    });

    // Decorate with Bootstrap CSS
    return (<table className="table table-bordered table-hover" width="100%">
      {tableHeaders}
      <tbody>
        {tableBody}
      </tbody>
    </table>)
  }
}
