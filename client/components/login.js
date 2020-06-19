import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {handleSubmit, error} = props

  return (
    <section id="loginSection">
      <div id="hasAccount">
        <h1>Log In</h1>
        <p>A Master Returns...</p>
        <div className="panel">
          <form onSubmit={handleSubmit} name="login">
            <ul>
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
                  Log In!
                </button>
              </li>
            </ul>
          </form>

          <div className="sideline" />
          <div>
            {/* style type for third party links */}
            <button type="button">FACEBOOK BUTTON</button>
            <button type="button">GOOGLE BUTTON</button>
          </div>
        </div>
        <Link to="/signup">Dont have an account? Sign Up Here!</Link>
        {error && error.response && <div> {error.response.data} </div>}
      </div>
    </section>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
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

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
