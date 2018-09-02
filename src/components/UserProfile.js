import React, { Component } from 'react'

import { connect } from 'react-redux'

import { unsetAuthenticatedUser } from '../actions/authedUser'

class UserProfile extends Component {

  render() {
    const { user, onUserSignOutClick } = this.props
    return (
      <div className="user-profile">
        <ul className="nav navbar-nav navbar-right list-inline">
         {this.props.isLoggedIn === true
          ? (
          <li className="list-inline-item">
              <img className="avatar img-fluid img-thumbnail" src={user.avatarURL} alt={`Avatar of ${user.name}`} />
              <span className="pl-1">Welcome {user.name}!   <button onClick={onUserSignOutClick}>Sign Out.</button></span>
          </li>
            )
          : (
          <li className="list-inline-item">
              <span className="padding-left">Please select a user to begin.</span>
          </li>
            )
          }
        </ul>
      </div>
    )
  }
}
function mapStateToProps ({ authedUser, questions, users }) {
  
  return {
    user: users[authedUser],
    isLoggedIn: authedUser !== null && typeof authedUser === 'string'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUserSignOutClick: () => {dispatch(unsetAuthenticatedUser())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)