import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

//these imports allow us to connect our app to the redux store and get initial data, but we also need the connect() invocation in the export at the bottom of our app.
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  //with the app and store connected, we can now dispatch our handleInitialData function during the componentDidMount() lifecycle event
  componentDidMount() {
  	this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


//the connect()(App) invocation is used to connect our app with the redux store making a component a container that can dispatch actions.
export default connect()(App);
