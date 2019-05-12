import React, { Component } from 'react'
import OldOrderList from './OldOrderList';
import FullOrderDetail from './FullOrderDetail';
import $ from 'jquery';

export default class Orders extends Component {
  state = {
    details_id: null
  }

  changeOrder = (id) => {
    this.setState({ details_id: id })
    $('#myModal').toggle();
  }

  hideModal = () => {
    $('#myModal').hide();
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2>Orders</h2>
              <OldOrderList changeOrder={this.changeOrder} user_id={this.props.user.id} />
            </div>
          </div>
        </div>

        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">


              <div class="modal-header">
                <h4 class="modal-title">Order Details</h4>
                <button type="button" onClick={this.hideModal} class="close" data-dismiss="modal">&times;</button>
              </div>


              <div class="modal-body">
                <FullOrderDetail details_id={this.state.details_id} />
              </div>


              <div class="modal-footer">
                <button type="button" class="btn btn-danger" onClick={this.hideModal} data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
