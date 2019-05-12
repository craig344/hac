import React, { Component } from 'react';
import MenuTable from './MenuTable';
import Axios from 'axios';

class App extends Component {

  state = {
    item: [],
    items: {
      name: '',
      description: '',
      price: '',
      category: ''
    }
  }

  /* componentDidMount() {
     this.getItem();
   }*/

  /*getItem = _=> {
    fetch('http://localhost:4000/item')
    .then(response => response.json())
    .then(response => this.setState({item: response.data }))
    .catch(err => console.error(err))
  }*/

  addItem = _ => {
    const { items } = this.state;
    Axios.post('http://localhost:4000/api/item/create', {
      name: items.name,
      price: items.price,
      description: items.description,
      category: items.category
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderItems = ({ id, name, description, price, category }) => <div key={id}>{name}{description}{price}{category}</div>

  render() {
    const { item, items } = this.state;
    return (
      <div>
        <MenuTable />

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Item
        </button>
            </div>


          </div>

        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="App">
                  {item.map(this.renderItems)}

                  <form>
                    <div className="form-group  row">
                      <label className="col-sm-4 col-form-label"> Item Name </label>
                      <div className="col-sm-8">
                        <input
                          value={items.name}
                          onChange={e => this.setState({ items: { ...items, name: e.target.value } })}
                        />
                      </div>

                    </div>

                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label"> Description </label>
                      <div className="col-sm-8">
                        <input
                          value={items.description}
                          onChange={e => this.setState({ items: { ...items, description: e.target.value } })}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label"> Price </label>
                      <div className="col-sm-8">
                        <input
                          value={items.price}
                          onChange={e => this.setState({ items: { ...items, price: e.target.value } })}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-4 col-form-label"> Category </label>
                      <div className="col-sm-8">
                        <input
                          value={items.category}
                          onChange={e => this.setState({ items: { ...items, category: e.target.value } })}
                        />
                      </div>
                    </div>

                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick={this.addItem} className="btn btn-primary">Save Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
