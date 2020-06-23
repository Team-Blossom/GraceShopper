import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class AlchemEditProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      pictures: '',
      price: 0,
      description: '',
      categoryId: 1,
      id: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  componentDidMount() {
    const {
      name,
      price,
      pictures,
      description,
      categoryId,
      id
    } = this.props.location.state
    this.setState({name, price, pictures, description, categoryId, id})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const updatedProd = await axios.put(
      `/api/products/${this.state.id}`,
      this.state
    )
    console.log(updatedProd.data, 'was made!')
  }

  render() {
    const {name, pictures, price, description, categoryId, id} = this.state
    return (
      <section id="editProdSection">
        <div>
          {/* LINKS TO PRODUCT SINGLE PAGE */}
          <Link to={`allproducts/${id}`} id="currentProd">
            <img src={pictures[0]} />
            <h3>Product Name: </h3>
            <p>{name}</p>
            <h3>Category Id: </h3>
            <p>{categoryId}</p>
            <h3>Product Description:</h3>
            <p>{description}</p>
          </Link>
          <form
            id="editProdForm"
            onChange={this.handleChange}
            onSubmit={() => this.handleSubmit(event)}
          >
            <h2>UPDATE PRODUCT</h2>
            <ul>
              <li>
                <label>Product Name:</label>
                <input type="text" placeholder={name} name="name" />
              </li>
              <li>
                <label>Price: </label>
                <input type="number" placeholder={price} name="price" />
              </li>
              <li>
                <label>Category: </label>
                <input
                  type="number"
                  placeholder={categoryId}
                  name="categoryId"
                />
              </li>
              <li>
                <label>Product Pictures</label>
                <input
                  type="text"
                  placeholder={`${pictures[0]}"Separate by ', ' "`}
                  name="picture"
                />
              </li>
              <li>
                <label>Product Description:</label>
                <textarea placeholder={description} name="description" />
              </li>
              <li>
                <button className="btn">UPDATE</button>
              </li>
            </ul>
            <Link to="/alchemdash">Back to Cabinet</Link>
          </form>
        </div>
      </section>
    )
  }
}
