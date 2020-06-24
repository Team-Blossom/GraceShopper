import React from 'react'
import {Link} from 'react-router-dom'

export const AlchemLogin = () => {
  return (
    <section id="alchemLoginSection">
      <div id="alchemLogin">
        <h1>ALCHEMIST LOGIN</h1>
        <p>SECRETS BEHIND THE MADNESS AWAIT</p>
        <div className="panel">
          <form>
            <ul>
              <li>
                <input required type="email" placeholder="EMAIL" />
              </li>
              <li>
                <input required type="password" placeholder="PASSWORD" />
              </li>
              <li>
                <button type="submit" className="btn btn-gold">
                  ENTER
                </button>
              </li>
            </ul>
          </form>
          {/* <!-- <hr> --> */}
          <div className="sideline" />
          <div>
            <button>FACEBOOK BUTTON</button>
            <button>GOOGLE BUTTON</button>
          </div>
        </div>
        {/* <!-- SHOULD REDIRECT BACK TO PREVIOUS LINK --> */}
        <Link to="/home">Back To Site</Link>
      </div>
    </section>
  )
}
