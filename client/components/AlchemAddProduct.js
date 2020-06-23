import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class AlchemAddProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      pictures: [],
      price: 0,
      description: ''
    }
  }

  render() {
    return (
      <section id="addProdSection">
        <div style={{display: 'flex', zIndex: '50'}}>
          <h1>Add Product</h1>
          <form>
            <ul>
              <li>
                <input required type="text" placeholder="Product Name" />
              </li>
              <li>
                <input
                  required
                  type="text"
                  placeholder="Separate Picture Links: ', '"
                />
              </li>
              <li>
                <input
                  required
                  type="number"
                  placeholder="Price"
                  min="100"
                  max="100000"
                />
              </li>
              <li>
                <textarea required placeholder="Description" />
              </li>
              <li>
                {/* <!-- ONSUBMIT TOGGLE THE DISPLAY OF THE ADDEDPROD DIV BELOW --> */}
                <button className="btn btn-gold btnToWhite" type="submit">
                  ADD
                </button>
                <a
                  className="btn btnToWhite"
                  onClick={() => window.location.reload(false)}
                >
                  CANCEL
                </a>
              </li>
            </ul>
          </form>
        </div>
        <div style={{display: 'none', zIndex: 50}} id="successAddProd">
          <div>
            <h2>A NEW PRODUCT IS MADE!</h2>
            <h3>They are going to love it!</h3>
            <img src="/pictures/gslogopic.jpg" />
            {/* <!-- Link to new product  --> */}
            <a className="btn">See New Product</a>
            {/* <!-- Link back to Alchemist View --> */}
            <a className="btn" href="./alchemistView.html">
              Back To Alchemist Cabinet
            </a>
          </div>
        </div>
      </section>
    )
  }
}
