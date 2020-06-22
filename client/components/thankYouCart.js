import React from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/order'
import {Link} from 'react-router-dom'

class ThankYouComponent extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }
  render() {
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
}

const mapDispatch = dispatch => {
  return {
    getCart: async () => dispatch(await getCartThunk())
  }
}

export const ThankYou = connect(null, mapDispatch)(ThankYouComponent)
