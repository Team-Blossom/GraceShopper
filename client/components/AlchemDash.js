import React from 'react'
import axios from 'axios'

export default class AlchemDash extends React.Component {
  constructor() {
    super()
    this.state = {
      alchemOptions: 'none',
      productsDisplay: 'none',
      ordersDisplay: 'none',
      mastersDisplay: 'none',
      masters: []
    }
    this.handlePanelDisplay = this.handlePanelDisplay.bind(this)
  }
  async componentDidMount() {
    const masters = await axios.get('/api/users')
    this.setState({
      alchemOptions: 'flex',
      masters: masters.data
    })
  }
  handlePanelDisplay(evt) {
    this.setState({
      alchemOptions: 'none',
      productsDisplay: 'none',
      ordersDisplay: 'none',
      mastersDisplay: 'none'
    })
    // SOME OF THE EVT.TARGET.NAMES ARE UNDEFINED? FIX THIS, SO THAT PANEL NAVIGATION IS FIXED
    console.log(evt.target.name)
    console.log(evt.target)
    this.setState({
      [evt.target.name]: 'flex'
    })
  }
  render() {
    return (
      <section style={{zIndex: '50'}} id="alchemistDashSection">
        <div id="alchemCabinet">
          <h1>The Alchemist's Cabinet</h1>
          <div
            id="alchemOptions"
            style={{display: `${this.state.alchemOptions}`}}
          >
            <a>
              <h2>Add Product</h2>
            </a>
            <a
              name="productsDisplay"
              onClick={evt => this.handlePanelDisplay(evt)}
            >
              <h2>Products</h2>
            </a>
            <a
              name="mastersDisplay"
              onClick={evt => this.handlePanelDisplay(evt)}
            >
              <h2>Master List</h2>
            </a>
            <a
              name="ordersDisplay"
              onClick={evt => this.handlePanelDisplay(evt)}
            >
              <h2>Orders</h2>
            </a>
          </div>
          <div
            id="alchemProdPanel"
            style={{display: `${this.state.productsDisplay}`, zIndex: '53'}}
          >
            <div id="alchemProdHeader">
              <a
                className="btn"
                name="alchemOptions"
                onClick={evt => this.handlePanelDisplay(evt)}
              >
                {/* <i name="alchemOptions" style={{fontSize: '48px'}} className="material-icons">
            keyboard_backspace</i> */}
                BACK
              </a>
              <h2>PRODUCT LOGGER</h2>
            </div>
            <div id="alchemProdCont">
              <select>
                <option selected>All Products</option>
                <option>Emotes</option>
                <option>Elixirs</option>
                <option>Relics</option>
                <option>Conduits</option>
                <option>Literature</option>
              </select>
              <div>
                <div className="alchemProd">
                  <ul>
                    <li>
                      <img src="./imagesViews/hue12-photography-8rTwokBwz1w-unsplash.jpg" />
                    </li>
                    <li>
                      <p>Product Name:</p>
                      <span>NAME</span>
                    </li>
                    <li>
                      <p>Prod QTY:</p>
                      <span>QTY</span>
                    </li>
                    <li>
                      <p>Prod Price:</p>
                      <span>PRICE &#164;</span>
                    </li>
                    <li>
                      <p>Prod ID:</p>
                      <span>ID</span>
                    </li>
                    <li>
                      <a className="btn">edit</a>
                      <a className="btn">
                        <i className="material-icons">delete</i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="alchemProd">
                  <ul>
                    <li>
                      <img src="./imagesViews/hue12-photography-8rTwokBwz1w-unsplash.jpg" />
                    </li>
                    <li>
                      <p>Product Name:</p>
                      <span>NAME</span>
                    </li>
                    <li>
                      <p>Prod QTY:</p>
                      <span>QTY</span>
                    </li>
                    <li>
                      <p>Prod Price:</p>
                      <span>PRICE &#164;</span>
                    </li>
                    <li>
                      <p>Prod ID:</p>
                      <span>ID</span>
                    </li>
                    <li>
                      <a className="btn">edit</a>
                      <a className="btn">
                        <i className="material-icons">delete</i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="alchemProd">
                  <ul>
                    <li>
                      <img src="./imagesViews/hue12-photography-8rTwokBwz1w-unsplash.jpg" />
                    </li>
                    <li>
                      <p>Product Name:</p>
                      <span>NAME</span>
                    </li>
                    <li>
                      <p>Prod QTY:</p>
                      <span>QTY</span>
                    </li>
                    <li>
                      <p>Prod Price:</p>
                      <span>PRICE &#164;</span>
                    </li>
                    <li>
                      <p>Prod ID:</p>
                      <span>ID</span>
                    </li>
                    <li>
                      <a className="btn">edit</a>
                      <a className="btn">
                        <i className="material-icons">delete</i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="alchemProd">
                  <ul>
                    <li>
                      <img src="./imagesViews/hue12-photography-8rTwokBwz1w-unsplash.jpg" />
                    </li>
                    <li>
                      <p>Product Name:</p>
                      <span>NAME</span>
                    </li>
                    <li>
                      <p>Prod QTY:</p>
                      <span>QTY</span>
                    </li>
                    <li>
                      <p>Prod Price:</p>
                      <span>PRICE &#164;</span>
                    </li>
                    <li>
                      <p>Prod ID:</p>
                      <span>ID</span>
                    </li>
                    <li>
                      <a className="btn">edit</a>
                      <a className="btn">
                        <i className="material-icons">delete</i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="alchemProd">
                  <ul>
                    <li>
                      <img src="./imagesViews/hue12-photography-8rTwokBwz1w-unsplash.jpg" />
                    </li>
                    <li>
                      <p>Product Name:</p>
                      <span>NAME</span>
                    </li>
                    <li>
                      <p>Prod QTY:</p>
                      {/* <!-- MAY BE A SELECT? --> */}
                      <span>QTY</span>
                    </li>
                    <li>
                      <p>Prod Price:</p>
                      <span>PRICE &#164;</span>
                    </li>
                    <li>
                      <p>Prod ID:</p>
                      <span>ID</span>
                    </li>
                    <li>
                      <a className="btn">edit</a>
                      <a className="btn">
                        <i className="material-icons">delete</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            id="alchemOrderPanel"
            style={{display: `${this.state.ordersDisplay}`}}
          >
            <div id="alchemOrderHeader">
              <a
                className="btn"
                name="alchemOptions"
                onClick={evt => this.handlePanelDisplay(evt)}
              >
                {/* <i name="alchemOptions" style={{fontSize: '48px'}} className="material-icons">
            keyboard_backspace</i> */}
                BACK
              </a>
              <h2>ORDER LOGGER</h2>
            </div>
            <div id="alchemOrderCont">
              {/* <!-- ONLY THE ORDERS THAT AREN'T CARTS! --> */}
              <div className="alchemOrder">
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
                    {/* <!-- ONRENDER THE VALUE SHOULD BE SET TO THE VALUE OF THE STATUS --> */}
                    {/* <!-- ONCHANGE UPDATE THE VALUE OF THE ORDER STATUS --> */}
                    <select value="processing">
                      <option value="processing">PROCESSING</option>
                      <option value="canceled">CANCELED</option>
                      <option value="completed">COMPLETED</option>
                    </select>
                    {/* <!-- <span>STATUS</span> --> */}
                  </li>
                  <li>
                    {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                    <a href="./orderDetails.html" className="btn btnToWhite">
                      Order Details
                    </a>
                  </li>
                </ul>
              </div>
              <div className="alchemOrder">
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
                    {/* <!-- ONRENDER THE VALUE SHOULD BE SET TO THE VALUE OF THE STATUS --> */}
                    {/* <!-- ONCHANGE UPDATE THE VALUE OF THE ORDER STATUS --> */}
                    <select value="processing">
                      <option value="processing">PROCESSING</option>
                      <option value="canceled">CANCELED</option>
                      <option value="completed">COMPLETED</option>
                    </select>
                    {/* <!-- <span>STATUS</span> --> */}
                  </li>
                  <li>
                    {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                    <a href="./orderDetails.html" className="btn btnToWhite">
                      Order Details
                    </a>
                  </li>
                </ul>
              </div>
              <div className="alchemOrder">
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
                    {/* <!-- ONRENDER THE VALUE SHOULD BE SET TO THE VALUE OF THE STATUS --> */}
                    {/* <!-- ONCHANGE UPDATE THE VALUE OF THE ORDER STATUS --> */}
                    <select value="processing">
                      <option value="processing">PROCESSING</option>
                      <option value="canceled">CANCELED</option>
                      <option value="completed">COMPLETED</option>
                    </select>
                    {/* <!-- <span>STATUS</span> --> */}
                  </li>
                  <li>
                    {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                    <a href="./orderDetails.html" className="btn btnToWhite">
                      Order Details
                    </a>
                  </li>
                </ul>
              </div>
              <div className="alchemOrder">
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
                    {/* <!-- ONRENDER THE VALUE SHOULD BE SET TO THE VALUE OF THE STATUS --> */}
                    {/* <!-- ONCHANGE UPDATE THE VALUE OF THE ORDER STATUS --> */}
                    <select value="processing">
                      <option value="processing">PROCESSING</option>
                      <option value="canceled">CANCELED</option>
                      <option value="completed">COMPLETED</option>
                    </select>
                    {/* <!-- <span>STATUS</span> --> */}
                  </li>
                  <li>
                    {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                    <a href="./orderDetails.html" className="btn btnToWhite">
                      Order Details
                    </a>
                  </li>
                </ul>
              </div>
              <div className="alchemOrder">
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
                    {/* <!-- ONRENDER THE VALUE SHOULD BE SET TO THE VALUE OF THE STATUS --> */}
                    {/* <!-- ONCHANGE UPDATE THE VALUE OF THE ORDER STATUS --> */}
                    <select value="processing">
                      <option value="processing">PROCESSING</option>
                      <option value="canceled">CANCELED</option>
                      <option value="completed">COMPLETED</option>
                    </select>
                    {/* <!-- <span>STATUS</span> --> */}
                  </li>
                  <li>
                    {/* <!-- LINKS TO SPECIFIC ORDER DETAILS --> */}
                    <a href="./orderDetails.html" className="btn btnToWhite">
                      Order Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="alchemMastersPanel"
            style={{display: `${this.state.mastersDisplay}`}}
          >
            <div id="alchemMastersHeader">
              <a
                className="btn"
                name="alchemOptions"
                onClick={evt => this.handlePanelDisplay(evt)}
              >
                {/* <i name="alchemOptions" style={{fontSize: '48px'}} className="material-icons">
            keyboard_backspace</i> */}
                BACK
              </a>
              <h2>MASTER LIST</h2>
            </div>
            <div id="alchemMastersCont">
              {/* <select>
                <option selected>Masters</option>
                <option>Alchemists</option>
              </select> */}
              {this.state.masters.length &&
                this.state.masters.map(master => (
                  <div key={master.id} className="alchemMaster">
                    <ul>
                      <li>
                        <p>Master Name:</p>
                        <span>{master.firstname + '' + master.lastname}</span>
                      </li>
                      <li>
                        <p>Master Id:</p>
                        <span>{master.id}</span>
                      </li>
                      <li>
                        <p>Order Qty:</p>
                        <span>QTY</span>
                      </li>
                      <li>
                        {/* <!-- ONCHANGE UPDATE USER TYPE VALUE --> */}
                        <p>Type:</p>
                        <select defaultValue={master.role}>
                          <option value="Master">Master</option>
                          <option value="Alchemist">Alchemist</option>
                        </select>
                      </li>
                      <li>
                        <p>Pass Reset?</p>
                        <input type="checkbox" />
                      </li>
                      <li>
                        <a className="btn">Delete</a>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
