import React, {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {ThankYou} from './thankYouCart'
import {Link} from 'react-router-dom'

const MasterCheckoutComponent = ({cart, user}) => {
  const [checkedOut, setcheckedOut] = useState(false)
  const [addressToShow, setAddress] = useState([[''], [''], [''], [''], ['']])
  const [billingToShow, setBilling] = useState([[''], [''], [''], ['']])
  const handleSubmit = async e => {
    e.preventDefault()
    await axios.put('/api/orders', {
      status: 'processing',
      address: addressToShow
    })
    setcheckedOut(true)
  }

  const handleSelectAdd = e => {
    let index = e.target.value
    setAddress(user.addresses[index])
  }

  const handleSelectBill = e => {
    let index = e.target.value
    setBilling(user.billing[index])
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
          <select defaultValue="0" onChange={e => handleSelectAdd(e)}>
            <option value="0">NEW ADDRESS</option>
            {user.addresses &&
              user.addresses.map((address, index) => (
                <option value={index}>{address[0]}</option>
              ))}
          </select>
          <ul>
            <li>
              <input
                required
                type="text"
                placeholder="First Name"
                defaultValue={addressToShow[0][0].split(' ')[0]}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                defaultValue={addressToShow[0][0].split(' ')[1]}
              />
            </li>
            <li>
              <input
                required
                type="text"
                placeholder="Address"
                defaultValue={addressToShow[1]}
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Apt, etc..."
                defaultValue={addressToShow[2]}
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="City"
                defaultValue={addressToShow[3]}
              />
              <input
                type="text"
                maxLength="2"
                placeholder="State"
                defaultValue={addressToShow[4]}
              />
              <input
                type="text"
                minLength="5"
                maxLength="5"
                placeholder="Zip Code"
                pattern="[0-9]*"
                defaultValue={addressToShow[5]}
              />
            </li>
            <li>
              <select defaultValue="1" value={addressToShow[6]}>
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
          <select defaultValue="1" onChange={e => handleSelectBill(e)}>
            <option value="1">NEW CARD</option>
            {user.billing &&
              user.billing.map((card, index) => (
                <option value={index}>{card[0]}</option>
              ))}
          </select>
          <input
            type="text"
            minLength="16"
            maxLength="16"
            placeholder="Card Number"
            pattern="[0-9]*"
            value={billingToShow[1]}
          />
          <input
            type="text"
            placeholder="Name Cn Card"
            value={billingToShow[2]}
          />
          <select defaultValue="1" value={billingToShow[3]}>
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
          <select defaultValue="1" value={billingToShow[4]}>
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
    cart: state.order,
    user: state.user
  }
}

export const MasterCheckout = connect(mapState)(MasterCheckoutComponent)
