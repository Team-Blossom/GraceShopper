import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {
  getCartThunk,
  addProductThunk,
  removeProductThunk,
  removeAllProdcutsThunk
} from '../store/order'

const CartSingleProduct = props => {
  const {product, addToCart, removeFromCart, deleteFromCart} = props
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

  const deleteAll = () => {
    console.log('clicked')
    deleteFromCart(product)
  }

  return (
    <div className="slimProd">
      {/* PRODUCT PICTURE HERE */}
      <img src={product.pictures[0]} />
      <div>
        <h3>{product.name.toUpperCase()}</h3>
        <form>
          <label>Quantity:</label>
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
      </div>
      <a className="btn" onClick={deleteAll}>
        Delete
      </a>
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
    removeFromCart: product => dispatch(removeProductThunk(product)),
    deleteFromCart: product => dispatch(removeAllProdcutsThunk(product))
  }
}

export const SlimProduct = connect(mapState, mapDispatch)(CartSingleProduct)
