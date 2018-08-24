import React, { Component } from 'react';
//import logo from '../assets/logo.svg';
import '../App.css';

//these imports allow us to leverage the various aspects of react router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//these imports allow us to connect our app to the redux store and get initial data, but we also need the connect() invocation in the export at the bottom of our app.
import { connect } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import PrivatePage from './PrivatePage'
import LoginWidget from './LoginWidget'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={() => (
               <div>
                {this.props.isLoggedIn === false
                 ? <LoginWidget />
                 : <PrivatePage viewtorender="homepage" />
                }
               </div>
               )} />
              <PrivateRoute path="/leaderboard" authedUser={this.props.authedUser} component={(props) => (<PrivatePage {...props} viewtorender="leaderboardpage" />)} />
              <PrivateRoute path="/ask-a-question" authedUser={this.props.authedUser} component={(props) => (<PrivatePage {...props} viewtorender="askaquestionpage" />)}  />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null && typeof authedUser === 'string',
    authedUser: authedUser
  }
}

//the connect()(App) invocation is used to connect our app with the redux store making a component a container that can dispatch actions.
export default connect(mapStateToProps)(App);
