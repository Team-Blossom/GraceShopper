import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getCartThunk, addProductThunk, removeProductThunk} from '../store/order'

const CartSingleProduct = props => {
  const {product, getCart, addToCart, removeFromCart} = props
  const [quant, setQuant] = useState(product.cart.quantity)
  const [oldQuant, setOldQuant] = useState(product.cart.quantity)

  const handleChange = event => {
    setOldQuant(quant)
    setQuant(Number(event.target.value))
  }

  useEffect(
    () => {
      if (quant > oldQuant) {
        addToCart(product)
        console.log('added ', product.name)
      } else if (quant < oldQuant) {
        removeFromCart(product)
        console.log('removed ', product)
      } else {
        console.log('did nothing')
      }
    },
    [quant]
  )

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
    getCart: () => dispatch(getCartThunk()),
    addToCart: product => dispatch(addProductThunk(product)),
    removeFromCart: product => dispatch(removeProductThunk(product))
  }
}

export const SlimProduct = connect(mapState, mapDispatch)(CartSingleProduct)
