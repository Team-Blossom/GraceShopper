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
      category: 'All Products',
      categoryNum: '0',
      categories: []
      //store all category classnames and set active classname (setState) inside of handleClick to activeProdNav
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    this.props.getProducts()
    const categories = await axios.get('/api/categories')

    this.setState({categories: categories.data})
    this.setState({category: 'All Products'})
    this.setState({categoryNum: '0'})
  }
  handleClick(event) {
    this.setState({category: event.target.innerText})
    this.setState({categoryNum: event.target.name})
  }
  render() {
    const allProducts = this.props.products
    const categories = this.state.categories
    const categoryName = this.state.category
    let categoryFilter = this.state.categoryNum

    let products
    if (categoryFilter !== '0') {
      products = allProducts.filter(
        product => product.categoryId === Number(categoryFilter)
      )
    } else {
      products = allProducts
    }
    return (
      <section id="productsSection">
        <div id="prodNav">
          <ul
            onClick={() => {
              this.handleClick(event)
            }}
          >
            <li key="0">
              <NavLink name="0" to="/allproducts">
                All Products
              </NavLink>
            </li>
            {categories.map(category => {
              return (
                <li key={category.id}>
                  <NavLink name={category.id} to="/allproducts">
                    {category.name}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div id="prodGroup">
          <div id="categoryTitle">
            <h1>{categoryName}</h1>
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
                    </div>
                  </Link>
                  <a
                    className="btn btn-gold"
                    onClick={() => this.props.addProduct(product)}
                  >
                    ADD TO CART
                  </a>
                </div>
              )
            })}
          </div>
        </div>
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
