import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Router, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Register,
  UserHome,
  Cart,
  NoviceCheckout,
  MasterCheckout
} from './components'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import ProductsView from './components/ProductsView'
import {me} from './store'
import MasterDash from './components/MasterDash'
import AlchemDash from './components/AlchemDash'
import OrderDetails from './components/orderDetails'
import Home from './components/Home'
import {ThankYou} from './components/thankYouCart'
import {getCartThunk} from './store/order'
import AlchemEditProduct from './components/AlchemEditProduct'
import ScrollToTop from './components/ScrollToTop'
// import { Router } from 'express'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isAlchemist} = this.props

    return (
      // <Router>
      // { /* <ScrollToTop/>  */}
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/allproducts/:productId" component={SingleProduct} />
        <Route exact path="/allproducts" component={AllProducts} />
        <Route path="/cart" component={Cart} />
        <Route path="/categories/:categoryId" component={ProductsView} />
        <Route path="/thankyou" component={ThankYou} />

        {/* Routes placed here are only available to Alchemists */}
        {isAlchemist && (
          <Switch>
            <Route path="/masterdashboard" component={MasterDash} />
            <Route path="/alchemDash" component={AlchemDash} />
            <Route path="/checkout" component={MasterCheckout} />
            <Route path="/orderDetails" component={OrderDetails} />
            <Route path="/alchemeditproduct" component={AlchemEditProduct} />
          </Switch>
        )}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/masterdashboard" component={MasterDash} />
            <Route path="/orderDetails" component={OrderDetails} />
            <Route path="/checkout" component={MasterCheckout} />

            {/* <Route path="/masterdashboard/orderview" component={orderView}></Route> */}
          </Switch>
        )}
        <Route path="/checkout" component={NoviceCheckout} />
        <Redirect to="/home" />
      </Switch>
      // </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isAlchemist: state.user.role === 'Alchemist'
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(getCartThunk())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
