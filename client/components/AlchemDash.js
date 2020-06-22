import React from 'react'
import AlchemAllProducts from './AlchemAllProducts'
import AlchemAllUsers from './AlchemAllUsers'
import AlchemAllOrders from './AlchemAllOrders'

export default class AlchemDash extends React.Component {
  constructor() {
    super()
    this.state = {
      alchemOptions: 'none',
      addProdDisplay: 'none',
      productsDisplay: 'none',
      ordersDisplay: 'none',
      mastersDisplay: 'none'
    }
    this.handlePanelDisplay = this.handlePanelDisplay.bind(this)
  }
  componentDidMount() {
    this.setState({
      alchemOptions: 'flex'
    })
  }
  handlePanelDisplay(evt) {
    this.setState({
      addProdDisplay: 'none',
      alchemOptions: 'none',
      productsDisplay: 'none',
      ordersDisplay: 'none',
      mastersDisplay: 'none'
    })
    // SOME OF THE EVT.TARGET.NAMES ARE UNDEFINED? FIX THIS, SO THAT PANEL NAVIGATION IS FIXED
    console.log(evt.target.name)
    console.log(evt.target)
    this.setState({
      [evt.target.name]: 'flex'
    })
  }
  render() {
    return (
      <section style={{zIndex: '50'}} id="alchemistDashSection">
        <div id="alchemCabinet">
          <h1>The Alchemist's Cabinet</h1>
          <div
            id="alchemOptions"
            style={{display: `${this.state.alchemOptions}`}}
          >
            <a
              name="addProdDisplay"
              onClick={evt => this.handlePanelDisplay(evt)}
            >
              <h2>Add Product</h2>
            </a>
            <a
              name="productsDisplay"
              onClick={evt => this.handlePanelDisplay(evt)}
            >
              <h2>Products</h2>
            </a>
            <a
              name="mastersDisplay"
              onClick={evt => this.handlePanelDisplay(evt)}
            >
              <h2>Master List</h2>
            </a>
            <a
              name="ordersDisplay"
              onClick={evt => this.handlePanelDisplay(evt)}
            >
              <h2>Orders</h2>
            </a>
          </div>
          {/* TODO: Add Product Component */}
          <AlchemAllProducts productsDisplay={this.state.productsDisplay} />
          <AlchemAllOrders ordersDisplay={this.state.ordersDisplay} />
          <AlchemAllUsers mastersDisplay={this.state.mastersDisplay} />
        </div>
      </section>
    )
  }
}
