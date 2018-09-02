import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import UserProfile from './UserProfile'


const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active px-3" : "nav-item px-3";
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
    return (
      <div className="navigation-section">
       <nav className="navbar navbar-toggleable-xl navbar-light bg-light">
        <Link className="navbar-brand pr-1 border-right" to="/">WOULD YOU RATHER?</Link>

          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name="Home" />
            <NavItem path="/leaderboard" name="Leaderboard" />
            <NavItem path="/add" name="Ask a Question" />
          </ul>      

      <UserProfile />
      </nav>      

    </div>
    )
  }
}

export default NavigationSection