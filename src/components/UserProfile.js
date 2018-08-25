import React, { Component } from 'react';

class UserProfile extends Component {

  render() {
    const { currentUser, onSignOutButtonClick } = this.props
    return (
      <div className="user-profile">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <div className="inset">
              <img className="img-fluid img-thumbnail" src={currentUser.avatarURL} />
              <span>Welcome {currentUser.name}! <button onClick={onSignOutButtonClick}>Sign Out.</button></span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserProfile
