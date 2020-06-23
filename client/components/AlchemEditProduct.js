import React from 'react'

export default class AlchemEditProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      picture: '',
      price: 0,
      description: ''
    }
  }
  componentDidMount() {}
  render() {
    const product = this.props.location.state
    return (
      <section id="editProdSection">
        <div>
          {/* LINKS TO PRODUCT SINGLE PAGE */}
          <a id="currentProd">
            <img src="/pictures/pratiksha-mohanty-V0xp-dTS3z0-unsplash.jpg" />
            <h3>Product Name: </h3>
            <p>{product.name}</p>
            <h3>Stock QTY: </h3>
            <p>QTY</p>
            <h3>Product Description:</h3>
            <p>{product.description}</p>
          </a>
          <form id="editProdForm">
            <h2>UPDATE PRODUCT</h2>
            <ul>
              <li>
                <label>Product Name:</label>
                <input type="text" placeholder="Name" defaultValue />
              </li>
              <li>
                <label>Stock QTY:</label>
                <input type="number" placeholder="QTY" defaultValue />
              </li>
              <li>
                <label>Product Pictures</label>
                <input
                  type="text"
                  placeholder="Separate by ', ' "
                  defaultValue
                />
              </li>
              <li>
                <label>Product Description:</label>
                <textarea placeholder="Generally Brief" defaultValue="" />
              </li>
              <li>
                <button className="btn">UPDATE</button>
              </li>
            </ul>
            <a>Back to Cabinet</a>
          </form>
        </div>
      </section>
    )
  }
}
