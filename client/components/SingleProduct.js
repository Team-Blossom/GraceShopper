import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProduct} from '../store/product'
import {addProductThunk} from '../store/order'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      picIndex: 0,
      quantity: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId)
  }
  handleChange(e) {
    this.setState({
      quantity: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    let prodToSend = this.props.product
    prodToSend.quantity = this.state.quantity
    this.props.addToCart(prodToSend)
  }

  render() {
    const {product} = this.props
    return (
      <>
        {product.pictures && (
          <section id="singleProdSection">
            <div id="theProd">
              <div id="imageCont">
                <img
                  id="mainImage"
                  src={product.pictures[this.state.picIndex]}
                />
                <div id="prodImgNav">
                  {/* NEEDS ONCLICK FUNCTION THAT CHANGES MAINIMAGE SRC AND PLACES CLASSNAME */}
                  {product.pictures.length &&
                    product.pictures.map((pictureURL, index) => (
                      <a href onClick={() => this.setState({picIndex: index})}>
                        <img
                          className={
                            index === this.state.picIndex ? 'activeProdImg' : ''
                          }
                          src={pictureURL}
                        />
                      </a>
                    ))}
                  {/* <a href>
                    <img src="/pictures/annie-spratt-xt79nQxc9Q0-unsplash.jpg" />
                  </a> */}
                </div>
              </div>
              <div id="prodDetails">
                <h1>{product.name}</h1>
                <h2>Description: </h2>
                <p>{product.description}</p>
                <h2>
                  Price: <span style={{color: '#F77F00'}}>{product.price}</span>{' '}
                  ¤
                </h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <ul>
                    <li>
                      <label>
                        <h2>Quantity:</h2>
                      </label>
                      <input
                        required
                        type="number"
                        max={10}
                        min={1}
                        defaultValue={1}
                        onChange={e => this.handleChange(e)}
                      />
                    </li>
                    <li>
                      <button type="submit" className="btn">
                        ADD TO CART
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
              {/* Recommended Items */}
            </div>
          </section>
        )}
      </>
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
    getProduct: id => dispatch(fetchProduct(id)),
    addToCart: product => dispatch(addProductThunk(product))
  }
}

export default connect(mapProduct, mapDispatch)(SingleProduct)
