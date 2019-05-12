import React, { Component } from 'react'
import Axios from 'axios';

export default class OrderList extends Component {
  state = {
    data: {
      columns: ['id', 'items'],
      rows: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/api/order/byStatus?status=placed').then(
      (response) => {
        console.log(response);
        if (response.data.success) {
          let items = response.data.data.item;
          let trows = items.map(function (item) {
            let titem = {
              'id': item.id,
              'items': item.item_count

            }
            return titem;
          });
          var ndata = this.state.data;
          ndata.rows = trows;
          this.setState({ data: ndata });
        }
      }
    );

  }
  markComplete = (event) => {
    let orderId = event.target.getAttribute('data-id');
    Axios.put('http://localhost:4000/api/order/status', {
      id: orderId,
      status: 'completed'
    })
      .then((response) => {
        let data = response.data;
        if (data.success) {
          let newRows = this.state.data.rows.filter((row) => {
            if (row.id != orderId) {
              return true;
            }
          })

          let tmpData = this.state.data;
          tmpData.rows = newRows;

          this.setState({ data: tmpData });
        }
      })
      .catch(function (error) {
        console.log(error);
      });


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
              <button data-id={row['id']} type="button" className="btn btn-primary ">View</button>
              <button data-id={row['id']} onClick={this.markComplete} type="button" className="btn btn-success ">Complete</button>
            </div>
          </td>
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
