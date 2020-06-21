import React from 'react'
import MasterAddrForm from './MasterAddrForm'

export default class MasterDash extends React.Component {
  constructor() {
    super()
    this.state = {
      salveDisplay: 'none',
      personalDisplay: 'none',
      addressDisplay: 'none',
      billingDisplay: 'none',
      orderDisplay: 'none',
      navClass: ''

      // addressForm: "none",
      // addressObj: {}
    }
    this.addressForm = 'none'
    this.handlePanelDisplay = this.handlePanelDisplay.bind(this)
    // this.handleFormDisplay = this.handleFormDisplay.bind(this)
  }

  componentDidMount() {
    this.setState({
      salveDisplay: 'flex'
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
    return (
      <section id="masterSection">
        {/* LOG OUT SHENANIGANS */}
        <a href="" style={{zIndex: '10'}} id="logout">
          Logout
        </a>
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
              <h1 style={{color: '#61210F'}}>Hi, MASTER NAME</h1>
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
                <img src="./imagesViews/gslogopic.jpg" />
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
                  Name: <span style={{color: '#f77f00'}}>MASTER NAME</span>
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
                  Email: <span style={{color: '#f77f00'}}>MASTER EMAIL</span>
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
                <h4>ADDRESSEE NAME</h4>
                <p>STREET NAME</p>
                <p>ADDRESS 2</p>
                <p>City State Zip</p>
                <p>Nation Choice</p>
                {/* <!-- LINKS TO PRE-FILLED ADDRESS FORM VIEW --> */}
                <div>
                  <a href="./masterAddressForm.html" className="btn">
                    Edit
                  </a>
                  <a className="btn">Delete</a>
                </div>
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
                <h4>NAME ON CARD</h4>
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
              <div className="masterOrder">
                <ul>
                  <li>
                    <h3>Order Placed: </h3>
                    <span>DATE</span>
                  </li>
                  <li>
                    <h3>Total Price: </h3>
                    <span>PRICE &#164;</span>
                  </li>
                  <li>
                    <h3>Total Items: </h3>
                    <span>ITEM QTY</span>
                  </li>
                  <li>
                    <h3>Order Status: </h3>
                    <span>STATUS</span>
                  </li>
                  <li>
                    {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                    <a href="./orderDetails.html" className="btn btnToWhite">
                      Order Details
                    </a>
                  </li>
                </ul>
              </div>
              {/* master orders */}
            </div>

            {/* <MasterAddrForm display={this.state.addressForm}/> */}
          </div>
        </div>
      </section>
    )
  }
}
