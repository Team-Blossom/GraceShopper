import React from 'react'
import {connect} from 'react-redux'
import {SlimProduct} from './cartSingleItem'
import {getCartThunk} from '../store/order'

class CartComponent extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }
  render() {
    const cart = this.props.cart
    return (
      <section id="cartSection">
        <div id="theCart">
          <h1>Welcome To Your Cart</h1>
          {cart.id !== undefined &&
            cart.products.map(product => {
              return <SlimProduct key={product.id} product={product} />
            })}
          <hr />
          <p>
            Subtotal: <span>{cart.price} ¤</span>
          </p>
        </div>
        <div id="theSummary">
          <div>
            <h2>Order Summary</h2>
            <p>
              Subtotal: <span>{cart.price} ¤</span>
            </p>
            <p>
              Estimated Taxes: <span>MONEY ¤</span>
            </p>
            <hr />
            <p>
              Total: <span>MONEY ¤</span>
            </p>
            <a className="btn btn-gold">Proceed To Checkout</a>
          </div>
        </div>
      </section>
    )
  }
}

const mapState = state => {
  return {
    cart: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(getCartThunk())
  }
}

export const Cart = connect(mapState, mapDispatch)(CartComponent)
