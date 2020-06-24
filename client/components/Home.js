import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {}

  render() {
    return (
      <section id="homePageSection">
        <div id="homeFirst">
          <div>
            <div id="showLogo">
              <h1>UTONIUM</h1>
              <img src="/pictures/gslogopic.jpg" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eius
              aspernatur eveniet, quo excepturi nulla est! Laudantium beatae
              iure exercitationem.
            </p>
            <div>
              {/* <!-- TO PRODUCTS LINK --> */}
              <Link to="/allproducts" className="btn btn-gold">
                Shop Products
              </Link>
              <a HREF="#quality" className="btn btn-gold">
                Our Quality
              </a>
            </div>
          </div>
        </div>
        <div id="quality">
          <h2>Our Quality</h2>
          <div id="prodIcons">
            <ul>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  emoji_emotions
                </i>
                <label>Emotes</label>
              </li>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  science
                </i>
                <label>Elixirs</label>
              </li>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  ac_unit
                </i>
                <label>Relics</label>
              </li>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  fingerprint
                </i>
                <label>Conduits</label>
              </li>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  book
                </i>
                <label>Literatures</label>
              </li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            veniam animi fugit minima omnis rerum minus, quod veritatis hic,
            reprehenderit ab. Eaque saepe atque odio sint dolorem qui, deserunt
            suscipit eius, illum, pariatur asperiores fugit aut exercitationem
            officiis voluptates molestias id! Rerum, alias! Atque obcaecati
            quidem, veniam ducimus provident aliquam.
          </p>
          {/* <!-- TO PRODUCTS LINK --> */}
          <Link to="/allproducts" className="btn btn-gold">
            View Products
          </Link>
        </div>
        <div id="membership">
          <h2>Members Get More</h2>
          <div>
            <ul>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  star
                </i>
                <label>Orders History</label>
              </li>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  star
                </i>
                <label>Address Storing</label>
              </li>
              <li>
                <i style={{fontSize: '48px'}} className="material-icons">
                  star
                </i>
                <label>Special Discounts</label>
              </li>
            </ul>
            <div className="sidebar" />
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                natus deserunt facilis, voluptatum tempora temporibus sed ipsam
                molestias ea quod ab. Provident at rem, voluptates autem facere
                soluta?{' '}
              </p>
              {/* <!-- TO SIGN UP LINK --> */}
              <Link to="/signup" className="btn btn-gold">
                Sign Up!
              </Link>
            </div>
          </div>
        </div>
        <div id="appSoon">
          <h2>APP COMING SOON!</h2>
          <div id="appCont">
            <div>
              <img src="/pictures/app-IPhone-BIG.png" />
            </div>
            <div className="sidebar" />
            <div>
              <h3>Mobile Delivery!</h3>
              <p>
                {' '}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                natus deserunt facilis, voluptatum tempora temporibus sed ipsam
                molestias ea quod ab. Provident at rem, voluptates autem facere
                soluta?
              </p>
              <a
                href="https://www.google.com"
                className="btn btn-gold btnToWhite"
              >
                Support Dev
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
