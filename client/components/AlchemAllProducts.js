import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class AlchemAllProd extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const products = await axios.get('/api/products')

    this.setState({
      products: products.data
    })
  }

  async handleDelete(product) {
    await axios.delete(`/api/products/` + product.id)
    const products = await axios.get('/api/products')
    this.setState({
      products: products.data
    })
  }

  render() {
    return (
      <div id="alchemProdPanel" style={{display: 'flex', zIndex: '53'}}>
        <div id="alchemProdHeader">
          <Link
            to="/alchemdash/"
            className="btn"
            name="alchemOptions"
            onClick={() => window.location.reload(false)}
          >
            {/* <i
              name="alchemOptions"
              style={{fontSize: '48px'}}
              className="material-icons"
            >
              keyboard_backspace
            </i> */}
            BACK
          </Link>
          <h2>PRODUCT LOGGER</h2>
        </div>
        <div id="alchemProdCont">
          {/* <select>
                <option selected>All Products</option>
                <option>Emotes</option>
                <option>Elixirs</option>
                <option>Relics</option>
                <option>Conduits</option>
                <option>Literature</option>
              </select> */}
          <div>
            {this.state.products.length &&
              this.state.products.map(product => (
                <div key={product.id} className="alchemProd">
                  <ul>
                    <li>
                      <img src="/pictures/hue12-photography-8rTwokBwz1w-unsplash.jpg" />
                    </li>
                    <li>
                      <p>Product Name:</p>
                      <span>{product.name}</span>
                    </li>
                    {/* <li>
                          <p>Prod Rating:</p>
                          <span>{product.rating}</span>
                        </li> */}
                    <li>
                      <p>Prod Price:</p>
                      <span>{product.price} &#164;</span>
                    </li>
                    <li>
                      <p>Prod ID:</p>
                      <span>{product.id}</span>
                    </li>
                    <li>
                      <Link
                        to={{pathname: 'alchemeditproduct', state: product}}
                        className="btn"
                      >
                        edit
                      </Link>
                      <Link
                        className="btn"
                        onClick={() => this.handleDelete(product)}
                      >
                        <i className="material-icons">delete</i>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
}
