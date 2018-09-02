import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//these imports allow us to connect our app to the redux store and get initial data, but we also need the connect() invocation in the export at the bottom of our app.
import { connect } from 'react-redux'

class AuthenticationPage extends Component {
  
  render() {
    return (
      <div className="authentication-page">

      </div>
    )
  }
}

function mapStateToProps({ authedUser }, ownProps) {
  return {
    isLoggedIn: authedUser !== null && typeof authedUser === 'string',
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(AuthenticationPage)
