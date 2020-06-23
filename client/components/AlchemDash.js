import React from 'react'
import AlchemAddProducts from './AlchemAddProduct'
import AlchemAllProducts from './AlchemAllProducts'
import AlchemAllUsers from './AlchemAllUsers'
import AlchemAllOrders from './AlchemAllOrders'

export default class AlchemDash extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedComp: ''
    }
    this.handlePanelDisplay = this.handlePanelDisplay.bind(this)
  }
  componentDidMount() {
    this.setState({
      selectedComp: ''
    })
  }
  handlePanelDisplay(compName) {
    this.setState({
      selectedComp: compName
    })
  }
  render() {
    console.log(this.state.selectedComp)
    return (
      <section style={{zIndex: '50'}} id="alchemistDashSection">
        {this.state.selectedComp === '' && (
          <div id="alchemCabinet">
            <h1>The Alchemist's Cabinet</h1>
            <div id="alchemOptions" style={{display: 'flex'}}>
              <a
                // name="addProdDisplay"
                onClick={() => this.handlePanelDisplay('addProdDisplay')}
              >
                <h2>Add Product</h2>
              </a>
              <a
                // name="productsDisplay"
                onClick={() => this.handlePanelDisplay('productsDisplay')}
              >
                <h2>Products</h2>
              </a>
              <a
                // name="mastersDisplay"
                onClick={() => this.handlePanelDisplay('mastersDisplay')}
              >
                <h2>Master List</h2>
              </a>
              <a
                // name="ordersDisplay"
                onClick={() => this.handlePanelDisplay('ordersDisplay')}
              >
                <h2>Orders</h2>
              </a>
            </div>
          </div>
        )}
        {this.state.selectedComp === 'addProdDisplay' ? (
          <AlchemAddProducts />
        ) : this.state.selectedComp === 'productsDisplay' ? (
          <AlchemAllProducts />
        ) : this.state.selectedComp === 'mastersDisplay' ? (
          <AlchemAllUsers />
        ) : this.state.selectedComp === 'ordersDisplay' ? (
          <AlchemAllOrders />
        ) : null}
      </section>
    )
  }
}
