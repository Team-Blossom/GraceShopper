import React from 'react'
import {Link} from 'react-router-dom'

const ThankYou = () => {
  return (
    <section id="thankYouSection">
      <div>
        <h1>Thank You!</h1>
        <h2>Your Order is on the way!</h2>
        <Link to="/allproducts" className="btn btn-gold btnToWhite">
          Continue Shopping
        </Link>
      </div>
    </section>
  )
}

export default ThankYou
