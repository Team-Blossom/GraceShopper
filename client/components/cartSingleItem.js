import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addProductThunk, removeProductThunk} from '../store/order'

const CartSingleProduct = props => {
  const {product, addToCart, removeFromCart} = props
  const [quant, setQuant] = useState(product.cart.quantity)

  const handleChange = event => {
    const oldQuant = quant
    setQuant(Number(event.target.value))
    if (quant < oldQuant) {
      addToCart(product)
    } else {
      removeFromCart(product)
    }
  }

  return (
    <div className="slimProd">
      {/* PRODUCT PICTURE HERE */}
      <img src />
      <h3>{product.name}</h3>
      <p>Quantity:</p>
      <form>
        <input
          name="quantity"
          type="number"
          max={10}
          min={1}
          defaultValue={product.cart.quantity}
          onChange={handleChange}
        />
      </form>
      <p>
        Price: <span>{product.price * quant} ¤</span>
      </p>
      <a className="btn">Delete</a>
    </div>
  )
}

const mapState = state => {
  return {
    cart: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    addToCart: product => dispatch(addProductThunk(product)),
    removeFromCart: product => dispatch(removeProductThunk(product))
  }
}

export const SlimProduct = connect(mapState, mapDispatch)(CartSingleProduct)
