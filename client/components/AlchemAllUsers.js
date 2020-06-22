import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class AlchemAllUsers extends React.Component {
  constructor() {
    super()
    this.state = {
      masters: []
    }
  }

  async componentDidMount() {
    const masters = await axios.get('/api/users')

    this.setState({
      masters: masters.data
    })
  }

  render() {
    return (
      <div
        id="alchemMastersPanel"
        style={{display: `${this.props.mastersDisplay}`}}
      >
        <div id="alchemMastersHeader">
          <Link
            className="btn"
            name="alchemOptions"
            onClick={() => window.location.reload(false)}
          >
            {/* <i name="alchemOptions" style={{fontSize: '48px'}} className="material-icons">
        keyboard_backspace</i> */}
            BACK
          </Link>
          <h2>MASTER LIST</h2>
        </div>
        <div id="alchemMastersCont">
          {/* <select>
            <option selected>Masters</option>
            <option>Alchemists</option>
          </select> */}
          {this.state.masters.length &&
            this.state.masters.map(master => (
              <div key={master.id} className="alchemMaster">
                <ul>
                  <li>
                    <p>Master Name:</p>
                    <span>{master.firstname + ' ' + master.lastname}</span>
                  </li>
                  <li>
                    <p>Master Id:</p>
                    <span>{master.id}</span>
                  </li>
                  {/* <li>
                    <p>Order Qty:</p>
                    <span>QTY</span>
                  </li> */}
                  <li>
                    <p>Email</p>
                    <span>{master.email}</span>
                  </li>
                  <li>
                    {/* <!-- ONCHANGE UPDATE USER TYPE VALUE --> */}
                    <p>Type:</p>
                    <select defaultValue={master.role}>
                      <option value="Master">Master</option>
                      <option value="Alchemist">Alchemist</option>
                    </select>
                  </li>
                  <li>
                    <p>Pass Reset?</p>
                    <input type="checkbox" />
                  </li>
                  <li>
                    <a className="btn">Delete</a>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
