import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class AlchemAllOrders extends React.Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }
  }

  async componentDidMount() {
    const orders = await axios.get('/api/orders/all')

    this.setState({
      orders: orders.data
    })
  }

  render() {
    const handleBack = this.props.backFunc
    return (
      <div id="alchemOrderPanel" style={{display: 'flex'}}>
        <div id="alchemOrderHeader">
          <Link
            className="btn"
            name="alchemOptions"
            onClick={() => handleBack('')}
          >
            {/* <i name="alchemOptions" style={{fontSize: '48px'}} className="material-icons">
            keyboard_backspace</i> */}
            BACK
          </Link>
          <h2>ORDER LOGGER</h2>
        </div>
        <div id="alchemOrderCont">
          {/* <!-- ONLY THE ORDERS THAT AREN'T CARTS! --> */}
          {this.state.orders.length &&
            this.state.orders.map(order => (
              <div key={order.id} className="alchemOrder">
                <ul>
                  <li>
                    <h3>Order ID: </h3>
                    <span>{order.id}</span>
                  </li>
                  <li>
                    <h3>Order Placed: </h3>
                    <span>{new Date(order.date).toLocaleString()}</span>
                  </li>
                  <li>
                    <h3>Total Price: </h3>
                    <span>{order.price} &#164;</span>
                  </li>
                  <li>
                    <h3>Total Items: </h3>
                    <span>{order.quantity}</span>
                  </li>
                  <li>
                    <h3>Order Status: </h3>
                    {/* <!-- ONRENDER THE VALUE SHOULD BE SET TO THE VALUE OF THE STATUS -->
                    <!-- ONCHANGE UPDATE THE VALUE OF THE ORDER STATUS -->
                    <select value="processing">
                      <option value="processing">PROCESSING</option>
                      <option value="canceled">CANCELED</option>
                      <option value="completed">COMPLETED</option>
                    </select> */}
                    <span>{order.status}</span>
                  </li>
                  <li>
                    {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                    <a href="./orderDetails.html" className="btn btnToWhite">
                      Order Details
                    </a>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
