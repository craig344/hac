import React, { Component } from 'react'
import Axios from 'axios';

export default class OrderList extends Component {
  state = {
    data: {
      columns: ['#Id', '#Items'],
      rows: [{
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
      }]
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/api/order/byStatus?status=placed').then(
      (response) => {
        console.log(response);

        let items = response.data.data.item;
        let trows = items.map(function (item) {
          let titem = {
            '#Id': item.id,
            '#Items': item.item_count

          }
          return titem;
        });
        var ndata = this.state.data;
        ndata.rows = trows;
        this.setState({ data: ndata });

      }
    );

  }
  markComplete = (event) => {
    console.log(event.target.getAttribute('data-id'));

  }
  render() {

    // Data
    var dataColumns = this.state.data.columns;
    var dataRows = this.state.data.rows;

    var tableHeaders = (<thead>
      <tr>
        {dataColumns.map(function (column) {
          return <th key={column}>{column}</th>;
        })}
        <th>Actions</th>
      </tr>
    </thead>);

    var tableBody = dataRows.map((row) => {
      return (
        <tr key={row['id']} >
          {dataColumns.map((column) => {
            return <td key={row[column]}>{row[column]}</td>;
          })}
          <td>
            <div className="btn-group btn-group-lg">
              <button data-id={row['#Id']} type="button" className="btn btn-primary ">View</button>
            <button data-id={row['#Id']} onClick={this.markComplete} type="button" className="btn btn-success ">Complete</button>
            </div>
          </td>
        </tr >);
  });

  // Decorate with Bootstrap CSS
  return(<table className = "table table-bordered table-hover" width = "100%" >
    { tableHeaders }
    < tbody >
    { tableBody }
      </tbody>
    </table >)
  }
}
