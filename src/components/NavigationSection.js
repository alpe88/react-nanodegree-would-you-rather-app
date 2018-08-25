import React, { Component } from 'react';
import {
  withRouter,
  Link,
} from 'react-router-dom'

import UserProfile from './UserProfile'


const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <Link to={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </Link>
    </li>
  );
}


class NavigationSection extends Component {

  render() {
    const { user, onSignOutButtonClick } = this.props
    return (
      <div className="navigation-section">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">WOULD YOU RATHER?</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <NavItem path="/" name="Home" />
            <NavItem path="/leaderboard" name="Leaderboard" />
            <NavItem path="/ask-a-question" name="Ask a Question" />
          </ul>      
        </div>
      <UserProfile currentUser={user} onSignOutButtonClick={onSignOutButtonClick} />
      </nav>      

    </div>
    )
  }
}

export default NavigationSection
