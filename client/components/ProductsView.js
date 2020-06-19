import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ProductsView extends React.Component {
  constructor() {
    super()
    this.state = {
      category: {}
    }
  }
  async componentDidMount() {
    const cat = await axios.get(
      `/api/categories/${this.props.match.params.categoryId}`
    )

    this.setState({category: cat.data})
  }
  render() {
    const category = this.state.category
    const products = this.state.category.products

    return (
      <div id="prodGroup">
        <Link to="/allproducts">All Products</Link>
        {/* /* CATEGORIES NEED BACKGROUND IMAGES */}
        <div id="categoryTitle">
          <h1>{category.name}</h1>
        </div>
        <div id="prodBoxContainer">
          {products &&
            products.map(product => {
              return (
                <div className="prodBox" key={product.id}>
                  <link
                    to="{`/allproducts/${product.id}`}"
                    className="linklink"
                  />
                  <img src={product.pictures[0]} />
                  <div>
                    <p>{product.name}</p>
                    <p>{product.price}¤</p>
                    <a className="btn btn-gold" href>
                      ADD TO CART
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
