import React, {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {ThankYou} from '../components/thankYouCart'
import {Link} from 'react-router-dom'

const CheckoutComponent = ({cart}) => {
  const [checkedOut, setcheckedOut] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    const order = await axios.put('/api/orders', {status: 'processing'})
    console.log(order.data)
    setcheckedOut(true)
    console.log(checkedOut)
  }

  return checkedOut ? (
    <ThankYou />
  ) : (
    <section id="masterCheckoutSection">
      <form
        id="master-ckotForms"
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <div id="masterShippingAddress">
          <h3>Shipping Address</h3>
          <select defaultValue="1">
            <option disabled value="1">
              NEW ADDRESS
            </option>
            <option>ADDRESS 1</option>
            <option>ADDRESS 2</option>
            <option>ADDRESS 3</option>
            <option>ADDRESS 4</option>
          </select>
          <ul>
            <li>
              <input required type="text" placeholder="First Name" />
              <input required type="Last Name" placeholder="Last Name" />
            </li>
            <li>
              <input required type="text" placeholder="Address" />
            </li>
            <li>
              <input type="text" placeholder="Apt, etc..." />
            </li>
            <li>
              <input type="text" placeholder="City" />
              <input type="text" maxLength="2" placeholder="State" />
              <input
                type="text"
                minLength="5"
                maxLength="5"
                placeholder="Zip Code"
                pattern="[0-9]*"
              />
            </li>
            <li>
              <select defaultValue="1">
                <option disabled value="1">
                  Select Nation
                </option>
                <option>Fire</option>
                <option>Water</option>
                <option>Earth</option>
                <option>Air</option>
              </select>
            </li>
          </ul>
        </div>
        <div id="master-billingInfo">
          <h3>Card Information</h3>
          <select defaultValue="1">
            <option disabled value="1">
              NEW CARD
            </option>
            <option>CARD 1</option>
            <option>CARD 2</option>
          </select>
          <input
            type="text"
            minLength="16"
            maxLength="16"
            placeholder="Card Number"
            pattern="[0-9]*"
          />
          <input type="text" placeholder="Name Cn Card" />
          <select defaultValue="1">
            <option disabled value="1">
              Exp.M
            </option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select defaultValue="1">
            <option disabled value="1">
              Exp.Y
            </option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
            <option>2030</option>
          </select>
        </div>
        <button className="btn btnToWhite" type="submit">
          PURCHASE
        </button>
      </form>
      <div className="cartSummary">
        <div>
          <h2>
            Cart Summary
            <span>
              <Link to="/cart" className="btn">
                (edit)
              </Link>
            </span>
          </h2>
          {cart.id !== undefined &&
            cart.products.map(product => (
              <div key={product.id} className="checkProd">
                <p>{product.name}</p>
                <p>Price: {product.price} &#164;</p>
                <p>x {product.cart.quantity}</p>
                <p>Total: {product.price * product.cart.quantity} &#164;</p>
              </div>
            ))}
          <hr />
          <p>Subtotal: {cart.price} &#164;</p>
          <p>Taxes: {cart.price * 0.05} &#164;</p>
          <p>Total: {cart.price * 1.05} &#164;</p>
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

export const Checkout = connect(mapState)(CheckoutComponent)
