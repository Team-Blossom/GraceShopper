import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, cart}) => (
  <nav id="mainNav">
    <ul>
      <li>
        <NavLink id="logoMainNav" to="/home">
          <img src="/pictures/gslogopic.jpg" />
        </NavLink>
        <p>UTONIUM</p>
      </li>
      <li>
        <NavLink activeClassName="activeMainNav" to="/home#quality">
          Who We Are
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeMainNav" to="/allproducts">
          Products
        </NavLink>
      </li>
      {isLoggedIn ? (
        <>
          <li>
            <NavLink activeClassName="activeMainNav" to="/masterdashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <a onClick={() => handleClick()} href="/">
              Logout
            </a>
          </li>
        </>
      ) : (
        <li>
          <NavLink activeClassName="activeMainNav" to="/login">
            <i style={{fontSize: '36px'}} className="material-icons">
              face
            </i>
            Login
          </NavLink>
        </li>
      )}
      <li>
        <NavLink activeClassName="activeMainNav" id="shopBag" to="/cart">
          <i style={{fontSize: '48px'}} className="material-icons">
            shopping_bag
          </i>
          <p>{cart.quantity ? cart.quantity : 0}</p>
        </NavLink>
      </li>
    </ul>
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
