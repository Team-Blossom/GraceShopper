import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {auth} from '../store'
import PropTypes from 'prop-types'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {handleSubmit, error} = props

  return (
    <section id="signupSection">
      <div id="noAccount">
        <h1>Sign Up</h1>
        <p>A Novice Becomes a Master...</p>
        <div className="panel">
          <form onSubmit={handleSubmit} name="signup">
            <ul>
              <li>
                <input required type="text" placeholder="FIRST NOMEN" />
              </li>
              <li>
                <input required type="text" placeholder="LAST NOMEN" />
              </li>
              <li>
                <input required name="email" type="email" placeholder="EMAIL" />
              </li>
              <li>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="PASSWORD"
                />
              </li>
              <li>
                <button type="submit" className="btn">
                  Sign Up!
                </button>
              </li>
            </ul>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
          <div className="sideline" />
          <div>
            {/* Third party  */}
            <button type="button">FACEBOOK BUTTON</button>
            <button type="button">GOOGLE BUTTON</button>
          </div>
        </div>
        {/* link to login view */}
        <Link to="/login">Have an account with us already?</Link>
      </div>
    </section>
  )
}

const mapSignup = state => {
  return {
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Register = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
