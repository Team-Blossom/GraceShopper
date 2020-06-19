import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProduct} from '../store/product'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId)
  }
  render() {
    const product = this.props.product
    console.log(product.pictures)
    return (
      <section id="singleProdSection">
        <div id="theProd">
          <div id="imageCont">
            <img
              id="mainImage"
              src="./imagesViews/hue12-photography-8rTwokBwz1w-unsplash.jpg"
            />
            <div id="prodImgNav">
              {/* NEEDS ONCLICK FUNCTION THAT CHANGES MAINIMAGE SRC AND PLACES CLASSNAME */}
              <a href>
                <img
                  className="activeProdImg"
                  src="./imagesViews/hue12-photography-8rTwokBwz1w-unsplash.jpg"
                />
              </a>
              <a href>
                <img src="./imagesViews/annie-spratt-xt79nQxc9Q0-unsplash.jpg" />
              </a>
            </div>
          </div>
          <div id="prodDetails">
            <h1>{product.name}</h1>
            <h2>Description: </h2>
            <p>{product.description}</p>
            <h2>
              Price: <span style={{color: '#F77F00'}}>PRODUCT PRICE</span> ¤
            </h2>
            <form>
              <ul>
                <li>
                  <label>
                    <h2>Quantity:</h2>
                  </label>
                  <input type="number" max={10} min={1} defaultValue={1} />
                </li>
                <li>
                  <a className="btn">ADD TO CART</a>
                </li>
              </ul>
            </form>
          </div>
          {/* Recommended Items */}
        </div>
        <footer>
          <p>
            UTONIUM <span style={{color: '#F77F00'}}>©</span> 2020
          </p>
          <p>Low Skrull Prices. High Quality Standards. Forever.</p>
          <a href>Admin Login</a>
        </footer>
      </section>
    )
  }
}

const mapProduct = state => {
  return {
    product: state.product
  }
}

const mapDispatch = dispatch => {
  return {
    getProduct: id => {
      dispatch(fetchProduct(id))
    }
  }
}

export default connect(mapProduct, mapDispatch)(SingleProduct)
