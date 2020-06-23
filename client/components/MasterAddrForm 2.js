import React from 'react'

export default class MasterAddrForm extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {}

  render() {
    return (
      <section
        style={{
          zIndex: '50',
          display: `${this.props.display}`,
          position: 'absolute',
          top: '0'
        }}
        id="masterAddrForm"
      >
        <div id="">
          {/* <!-- IF COMP PASSED NO ADDRESS OBJECT, CHANGE TEXT TO "ADD ADDRESS"  --> */}
          <h1>Update Address</h1>
          <form id="">
            <ul>
              <ul>
                <li>
                  <input required type="text" placeholder="First Name" />
                  <input required type="Last Name" placeholder="Last Name" />
                </li>
                <li>
                  <input required type="text" placeholder="Address" />
                </li>
                <li>
                  <input type="text" placeholder="Apt, etc..." />
                </li>
                <li>
                  <input type="text" placeholder="City" />
                  <input type="text" maxLength="2" placeholder="State" />
                  {/* <!-- //how do we check if its not a string though, how do we force numbers without giving a selection... --> */}
                  <input
                    type="text"
                    minLength="5"
                    maxLength="5"
                    placeholder="Zip Code"
                  />
                </li>
                <li>
                  <select>
                    <option disabled selected>
                      Select Nation
                    </option>
                    <option>Fire</option>
                    <option>Water</option>
                    <option>Earth</option>
                    <option>Air</option>
                  </select>
                </li>
                <li>
                  {/* <!-- IF PASSED NO ADDRESS OBJECT, CHANGE TEXT TO "ADD"  --> */}
                  <button className="btn btn-gold btnToWhite" type="submit">
                    SAVE
                  </button>
                  {/* <!-- LINK TO MASTER DASHBOARD --> */}
                  <a
                    href="./masterView.html"
                    style={{marginLeft: '10px'}}
                    className="btn btnToWhite"
                  >
                    Cancel
                  </a>
                </li>
              </ul>
            </ul>
          </form>
        </div>
      </section>
    )
  }
}
