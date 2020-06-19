import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {SlimProduct} from './cartSingleItem'
import {getCartThunk, addProductThunk, removeProductThunk} from '../store/order'

const CartComponent = props => {
  const {getCart, addToCart, removeFromCart, cart} = props

  if (!cart.id) {
    getCart()
  }

  return (
    <section id="cartSection">
      <div id="theCart">
        <h1>Welcome To Your Cart</h1>
        {cart.id !== undefined &&
          cart.products.map((product, index) => {
            if (product === cart.products[index + 1]) {
              console.log(index)
            } else {
              return <SlimProduct product={product} />
            }
          })}
        <p>
          Subtotal <span>MONEY ¤</span>
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

const mapState = state => {
  return {
    cart: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(getCartThunk()),
    addToCart: product => dispatch(addProductThunk(product)),
    removeFromCart: product => dispatch(removeProductThunk(product))
  }
}

export const Cart = connect(mapState, mapDispatch)(CartComponent)
