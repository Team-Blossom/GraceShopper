import React from 'react'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import {fetchProducts} from '../store/products'
import axios from 'axios'
import {addProductThunk} from '../store/order'

export class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    this.props.getProducts()
    const categories = await axios.get('/api/categories')

    this.setState({categories: categories.data})
    console.log(this.state)
  }
  handleClick() {
    console.log(this)
  }
  render() {
    const products = this.props.products
    const categories = this.state.categories

    return (
      <section id="productsSection">
        <div id="prodNav">
          <ul>
            {/* <li>
              <NavLink href className="activeProdNav">
                All Products
              </NavLink>
            </li> */}
            {categories.map(category => {
              return (
                <li key={category.id}>
                  <NavLink
                    to={{
                      pathname: `/categories/${category.id}`,
                      props: {category: category}
                    }}
                    onClick={() => {
                      console.log(this)
                      this.handleClick()
                    }}
                    value={category.id}
                  >
                    {category.name}
                  </NavLink>
                </li>
              )
            })}

            {/* <li>
              <a href> Elixirs</a>
            </li>
            <li>
              <a href> Relics</a>
            </li>
            <li>
              <a href> Conduits</a>
            </li>
            <li>
              <a href> Literature</a>
            </li> */}
          </ul>
        </div>
        <div id="prodGroup">
          <div id="categoryTitle">
            <h1>ALL PRODUCTS</h1>
          </div>
          <div id="prodBoxContainer">
            {products.map(product => {
              return (
                <div className="prodBox" key={product.id}>
                  <Link to={`/allproducts/${product.id}`} className="linklink">
                    <img src={product.pictures[0]} />
                    <div>
                      <p>{product.name}</p>
                      <p>{product.price}&#164;</p>
                      <a className="btn btn-gold" href="">
                        ADD TO CART
                      </a>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="prodBox">
            <a href>
              <img src="https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg" />
            </a>
            <div>
              <a href>
                <p>PRODUCT NAME</p>
                <p>0.00 ¤</p>
              </a>
              <a className="btn btn-gold" href>
                ADD TO CART
              </a>
            </div>
          </div>{' '}
        </div>
        {/* </div> */}
      </section>
    )
  }
}

const mapProducts = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => {
      dispatch(fetchProducts())
    },
    addProduct: product => {
      dispatch(addProductThunk(product))
    }
  }
}

export default connect(mapProducts, mapDispatch)(AllProducts)
