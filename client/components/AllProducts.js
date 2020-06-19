import React from 'react'

export default class AllProducts extends React.Component {
  render() {
    console.log('allproducts')
    return (
      <section id="productsSection">
        <div id="prodNav">
          <ul>
            <li>
              <a href className="activeProdNav">
                All Products
              </a>
            </li>
            <li>
              <a href> Emotes</a>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
        <div id="prodGroup">
          {/* CATEGORIES NEED BACKGROUND IMAGES */}
          <div id="categoryTitle">
            <h1>ALL PRODUCTS</h1>
          </div>
          <div id="prodBoxContainer">
            <div className="prodBox">
              <a href="./singleProductView.html" className="linklink">
                <img src="https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg" />
              </a>
              <div>
                <a href="./singleProductView.html" className="linklink">
                  <p>PRODUCT NAME</p>
                  <p>0.00 ¤</p>
                </a>
                <a className="btn btn-gold" href>
                  ADD TO CART
                </a>
              </div>
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
            </div>
            <div className="prodBox">
              <img src="https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg" />
              <div>
                <p>PRODUCT NAME</p>
                <p>0.00 ¤</p>
                <a className="btn btn-gold" href>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
