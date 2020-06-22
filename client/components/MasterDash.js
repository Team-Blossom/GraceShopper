import React from 'react'
import MasterAddrForm from './MasterAddrForm'
import me from '../store/user'
import {connect} from 'react-redux'
import {logout} from '../store'
import {Link} from 'react-router-dom'
import axios from 'axios'
export class MasterDash extends React.Component {
  constructor() {
    super()
    this.state = {
      salveDisplay: 'none',
      personalDisplay: 'none',
      addressDisplay: 'none',
      billingDisplay: 'none',
      orderDisplay: 'none',
      navClass: '',
      orders: []

      // addressForm: "none",
      // addressObj: {}
    }
    this.addressForm = 'none'
    this.handlePanelDisplay = this.handlePanelDisplay.bind(this)
    // this.handleFormDisplay = this.handleFormDisplay.bind(this)
  }

  async componentDidMount() {
    const orders = await axios.get(`/api/orders/myorders`)

    this.setState({
      salveDisplay: 'flex',
      orders: orders.data
    })
  }
  handlePanelDisplay(evt) {
    // clear all views out
    this.setState({
      salveDisplay: 'none',
      personalDisplay: 'none',
      addressDisplay: 'none',
      billingDisplay: 'none',
      orderDisplay: 'none'
      // addressForm: "none"
    })
    // display desired panel
    this.setState({
      [evt.target.name]: 'flex'
    })
  }
  // handleFormDisplay(evt){
  //   this.setState({
  //     addressForm: "none"
  //   })
  //   this.setState({
  //     [evt.target.name]:"flex"
  //   })
  //   // let name = evt.target.name
  //   // evt.preventDefault()
  //   // this.addressForm = "flex"
  // }
  handleActiveNav(evt) {
    let lis = evt.target.parentNode.parentNode.children
    for (let i = 0; i < 4; i++) {
      console.log(lis[i])
      lis[i].firstChild.className = ' '
      console.log(lis[i].firstChild)
      //if the next line wasn't in this loop ther would be a delay for its assignment for some reason...
      evt.target.className = 'activeMasterNav'
    }
  }
  render() {
    const user = this.props.user
    const orders = this.state.orders
    console.log(orders)
    return (
      <section id="masterSection">
        <div id="masterPanel">
          <div id="masterNav">
            <ul>
              <li>
                <a
                  name="personalDisplay"
                  className={`${this.state.navClass}`}
                  onClick={evt => {
                    this.handleActiveNav(evt)
                    this.handlePanelDisplay(evt)
                  }}
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  name="addressDisplay"
                  className={`${this.state.navClass}`}
                  onClick={evt => {
                    this.handleActiveNav(evt)
                    this.handlePanelDisplay(evt)
                  }}
                >
                  Addresses
                </a>
              </li>
              <li>
                <a
                  name="billingDisplay"
                  className={`${this.state.navClass}`}
                  onClick={evt => {
                    this.handleActiveNav(evt)
                    this.handlePanelDisplay(evt)
                  }}
                >
                  Billing Info
                </a>
              </li>
              <li>
                <a
                  name="orderDisplay"
                  className={`${this.state.navClass}`}
                  onClick={evt => {
                    this.handleActiveNav(evt)
                    this.handlePanelDisplay(evt)
                  }}
                >
                  Orders
                </a>
              </li>
              {/* <!-- <li>
            <a></a>
          </li> --> */}
            </ul>
          </div>

          <div id="masterSide">
            <div
              id="salve"
              style={{display: `${this.state.salveDisplay}`, zIndex: '1'}}
            >
              <h1 style={{color: '#61210F'}}>Hi, {user.firstname}</h1>
              <h3>Welcome to Your Dashboard</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quod nam distinctio adipisci, at error autem. Sint eveniet
                pariatur cupiditate blanditiis tempora, doloremque ipsam
                inventore minus! Culpa, amet voluptatem? Nulla voluptatibus
                maiores ipsum eum omnis at quo cupiditate iste odio, voluptatem
                eos a nostrum necessitatibus. Tenetur ea pariatur quibusdam
                odio.
              </p>
              {/* <!-- LINK BACK TO HOME OR PRODUCTS --> */}
              <div id="logo">
                <img src="./pictures/gslogopic.jpg" />
              </div>
              <a className="btn">Continue Shopping</a>
            </div>

            <div
              id="personalDetails"
              style={{display: `${this.state.personalDisplay}`, zIndex: '2'}}
            >
              {/* <!-- <h2>Account Settings</h2> --> */}
              <h2>Personal Details</h2>
              <div id="masterName">
                <h4>
                  Name: <span style={{color: '#f77f00'}}>{user.firstname}</span>
                </h4>
                <form>
                  {/* <!-- PLACEHOLDER SHOULD BE WHAT ALREADY EXISTS IN DATA BASE --> */}
                  <input required type="text" placeholder="First Name" />
                  <input required type="text" placeholder="Last Name" />
                  <button type="submit" className="btn">
                    Change
                  </button>
                </form>
              </div>
              <div id="masterEmail">
                <h4>
                  Email: <span style={{color: '#f77f00'}}>{user.email}</span>
                </h4>
                <form>
                  <input required type="email" placeholder="Email" />
                  <button type="submit" className="btn">
                    Change
                  </button>
                </form>
              </div>
              <div id="masterPassword">
                {/* <!-- HASH THE PASSWORD HERE, JUST SHOW FIRST CHAR? --> */}
                <h4>
                  Password:{' '}
                  <span style={{color: '#f77f00'}}>Hashed Password</span>
                </h4>
                <form>
                  <input
                    required
                    type="password"
                    placeholder="Previous Password"
                  />
                  <input required type="text" placeholder="New Password" />
                  <button type="submit" className="btn">
                    Change
                  </button>
                </form>
              </div>
            </div>

            <div
              id="addressesCont"
              style={{display: `${this.state.addressDisplay}`, zIndex: '3'}}
            >
              <div id="newAddress">
                {/* <!-- LINKS TO EDIT ADDRESS FORM VIEW --> */}
                <a
                  href=""
                  name="addressForm"
                  onClick={evt => {
                    this.handlePanelDisplay(evt)
                  }}
                >
                  <i className="material-icons">add</i>
                  <h4>New Address</h4>
                </a>
              </div>
              <div className="masterAddress" name="addressForm">
                {/* <!-- I BELIEVE WE INCLUDED THE ADDRESSEE NAME? --> */}
                <h4>{user.firstname}'s adresses</h4>
                {user.addresses.map(address => {
                  return (
                    <div key={user.id}>
                      <p>{address}</p>
                      <a href="./masterAddressForm.html" className="btn">
                        Edit
                      </a>
                      <a className="btn">Delete</a>
                    </div>
                  )
                })}

                {/* <!-- LINKS TO PRE-FILLED ADDRESS FORM VIEW --> */}
              </div>
            </div>

            <div
              id="billingCont"
              style={{display: `${this.state.billingDisplay}`, zIndex: '4'}}
            >
              <div id="newBilling">
                {/* <!-- LINKS TO NEW BILLING FORM --> */}
                <a href="">
                  <i className="material-icons">add</i>
                  <h4>New Billing</h4>
                </a>
              </div>
              <div className="masterBilling">
                {/* <!-- I BELIEVE WE INCLUDED THE BILLEE NAME? --> */}
                <h4>
                  {user.firstname} {user.lastname}
                </h4>
                <p>CARD NUMBER</p>
                <p>EXP MONTH AND YEAR</p>
                <a className="btn">DELETE</a>
              </div>
            </div>

            <div
              id="masterOrders"
              style={{display: `${this.state.orderDisplay}`, zIndex: '5'}}
            >
              <h2>Your Orders</h2>
              {orders.map(order => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="masterOrder" key={user.id}>
                    <ul>
                      <li key={order.date}>
                        <h3>Order Placed: </h3>
                        <span>{order.date}</span>
                      </li>
                      <li>
                        <h3>Total Price: </h3>
                        <span>{order.price} &#164;</span>
                      </li>
                      <li>
                        <h3>Total Items: </h3>
                        <span>{order.quantity}</span>
                      </li>
                      <li>
                        <h3>Order Status: </h3>
                        <span>{order.status}</span>
                      </li>
                      <li>
                        {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                        <Link
                          to={{pathname: './orderDetails', state: {order}}}
                          className="btn btnToWhite"
                        >
                          Order Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                )
              })}

              {/* master orders */}
            </div>

            {/* <MasterAddrForm display={this.state.addressForm}/> */}
          </div>
        </div>
      </section>
    )
  }
}

const mapUser = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapUser, mapDispatch)(MasterDash)
