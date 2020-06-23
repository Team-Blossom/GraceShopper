import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class OrderDetails extends React.Component {
  render() {
    const order = this.props.location.state.order
    const user = this.props.user
    console.log(order)
    console.log(this.props)
    return (
      <section id="orderDetailsSection">
        <div id="orderSpecs">
          <ul>
            <li>
              <h3>Placed: </h3>
              <span>{new Date(order.date).toLocaleString()}</span>
            </li>
            <li>
              <h3>Total Price: </h3>
              <span>{order.price}¤</span>
            </li>
            <li>
              <h3>Total Items: </h3>
              <span>{order.quantity}</span>
            </li>
            <li>
              <h3>Order Status: </h3>
              <span>{order.status}</span>
            </li>
            <li>
              <h3>Order ID: </h3>
              <span>{order.id}</span>
            </li>
          </ul>
        </div>
        <div id="moreSpecs">
          <div>
            <h3>Customer:</h3>
            <p>
              {user.firstname} {user.lastname}
            </p>
          </div>
          <div>
            <h3>Shipped To:</h3>
            <p>{order.address}</p>
          </div>
          <div>
            <img src="/pictures/gslogopic.jpg" />
          </div>
        </div>
        <div id="orderedProdsCont">
          {order.products.length &&
            order.products.map(product => {
              return (
                <div className="orderedProd" key={product.id}>
                  <img src="/pictures/hue12-photography-8rTwokBwz1w-unsplash.jpg" />
                  <p style={{fontSize: '.8rem'}}>{product.name}</p>
                  {/* <p>
                  PRODUCT QTY: <span>QTY in cart</span>
                </p> */}
                  <p>
                    PRICE: <span>{product.price}</span>
                  </p>
                  {/* <p>
                  TOTAL PRICE: <span></span>
                </p> */}
                </div>
              )
            })}
        </div>
        <Link to="/masterdashboard">
          <i className="material-icons">keyboard_backspace</i>
          Back to DashBoard
        </Link>
      </section>
    )
  }
}

const mapUser = state => {
  return {
    user: state.user
  }
}

export default connect(mapUser)(OrderDetails)
