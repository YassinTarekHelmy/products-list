import './App.css';
import React, {Component} from 'react';
import Items from './components/item/items'
import AddItem from './components/addItem/addItem'
import Total from './components/total/total'

class App extends Component {
  state = {
    items: [
      {id:1, product:'Pen', price:2, quantity:1 },
      {id:2, product:'Book', price:10, quantity:1 }
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)
    this.setState({items: items})
  }

  increaseQuantity = (id) => {
    let items = this.state.items
    let i = items.findIndex(item => item.id === id)
    items[i].quantity += 1
    this.setState({items: items})
  }

  decreaseQuantity = (id) => {
    let items = this.state.items
    let i = items.findIndex(item => item.id === id)
    if (items[i].quantity > 1) {
      items[i].quantity -= 1
      this.setState({items: items})
    } else {
      this.deleteItem(id)
    }
  }

  addItem = (item) => {
    this.state.items.length > 0 ? (
      item.id = this.state.items[this.state.items.length - 1].id + 1 
    ) : item.id = 1
    console.log(item.id)
    let items = this.state.items
    items.push(item)
    this.setState({items: items})
  }

  render() {
    return (
      <div className="container">
        <h1>Product List React App</h1>
        <div className="table">
          <Items items={this.state.items} del={this.deleteItem} inc={this.increaseQuantity} dec={this.decreaseQuantity}/>
          <AddItem add={this.addItem}/>
          <Total items={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default App;
