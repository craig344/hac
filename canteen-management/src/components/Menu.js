import React, { Component } from 'react';


class App extends Component {

  state = {
    item: [],
    items: {
      name: '',
      description: '',
      price: ''
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

  addItem = _=> {
    const { items } = this.state;
    fetch(`http://localhost:4000/item/add?name=${items.name}&description=${items.description}&price=${items.price}`)
    //.then(response => response.json())
    .then(this.getItem)
    .catch(err => console.error(err))
  }

  renderItems = ({ id, name, description, price }) => <div key={id}>{name}{description}{price}</div>

  render() {
    const { item, items} = this.state;
  return (
    <div className="App">
      {item.map(this.renderItems)}

      <div>
          <div>
        <label> Item Name </label>
        <input 
         value={items.name} 
         onChange={e => this.setState({ items: { ...items, name: e.target.value}})} 
        />
        </div>

        <div>
        <label> Description </label>
        <input
         value={items.description}
         onChange={e => this.setState({ items: { ...items, description: e.target.value}})} 
        />
        </div>
        <div>
        <label> Price </label>
        <input
         value={items.price}
         onChange={e => this.setState({ items: { ...items, price: e.target.value}})} 
        />
        </div>
        <button onClick={this.addItem}> Add Item</button>
      </div>
    </div>
  );
}
}

export default App;
