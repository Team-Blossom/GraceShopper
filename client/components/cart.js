import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCartThunk, addProductThunk, removeProductThunk} from '../store/order'

const CartComponent = props => {
  const {getCart, addToCart, removeFromCart, cart} = props

  if (!cart.id) {
    getCart()
  }

  const listItem = product => (
    <div className="slimProd">
      {/* PRODUCT PICTURE HERE */}
      <img src />
      <h3>{product.name}</h3>
      <p>Quantity:</p>
      <form>
        <input type="number" max={10} min={1} defaultValue={1} />
      </form>
      <p>
        Price: <span>{product.price}*Quantity ¤</span>
      </p>
      <a className="btn">Delete</a>
    </div>
  )
  return (
    <section id="cartSection">
      <div id="theCart">
        <h1>Welcome To Your Cart</h1>
        {cart.id !== undefined &&
          cart.products.map(product => listItem(product))}
        <p>
          Subtotal <span>MONEY ¤</span>
        </p>
      </div>
      <div id="theSummary">
        <div>
          <h2>Order Summary</h2>
          <p>
            Subtotal: <span>MONEY ¤</span>
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
