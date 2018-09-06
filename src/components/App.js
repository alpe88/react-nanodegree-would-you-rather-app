import React, { Component, Fragment } from 'react';
//import logo from '../assets/logo.svg';
import '../App.css';

//these imports allow us to leverage the various aspects of react router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import PrivateRoute from '../utils/routes/PrivateRoute'
import PrivatePage from './PrivatePage'

class App extends Component {

  render() {
    return (
          <div className="App">
                 <Router>
                  <Fragment>
                    <Switch>
                      <Route exact path="/" component={(props) => (<PrivatePage {...props} viewtorender="homepage" />)} />
                      <PrivateRoute path="/leaderboard" authedUser={this.props.authedUser} component={(props) => (<PrivatePage {...props} viewtorender="leaderboardpage" />)} />
                      <PrivateRoute path="/add" authedUser={this.props.authedUser} component={(props) => (<PrivatePage {...props} viewtorender="askaquestionpage" />)}  />
                      <PrivateRoute exact path="/questions/question_id:id" authedUser={this.props.authedUser} component={(props) => (<PrivatePage {...props} viewtorender="questiondetails" />)}  />
                      <Route render={() => <h1>Page not found</h1>} />
                    </Switch>
                  </Fragment>
                </Router>
          </div>
    )
  }
}

export default App
