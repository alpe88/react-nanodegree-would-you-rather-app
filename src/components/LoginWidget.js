import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

//these imports allow us to connect our app to the redux store and get initial data, but we also need the connect() invocation in the export at the bottom of our app.
import { connect } from 'react-redux'

import { handleUserList } from '../actions/shared'
import { setAuthenticatedUser } from '../actions/authedUser'

 class LoginWidget extends Component {
   
  state = {
    loading: true,
    userLoggedIn: false,
    userSelected: null,
    redirectToReferrer: false,
  }

  componentDidMount() {
      this.props.loadUsers().then(response => {
         this.setState({ loading: false })
      })
  }

  saveUserToState = (event) => {
     this.setState({
          userSelected: event.target.value
      })
     //console.log('user passed to getuser: ', event.target.value)
     //console.log('user in state: ', this.state.userSelected)
  }

  onSignInClick = () => {
    if(this.state.userSelected !== null) {
          this.setState(() => ({
            redirectToReferrer: true
          }))
          this.props.signUserIn(this.state.userSelected)
    }else{
        alert('Please select a user!')
    }
  }

  render() {
    const { from } = this.props.location || { from: { pathname: '/' } }
    const { users } = this.props
    const { loading, redirectToReferrer } = this.state

    if(loading) {
      return 'LOADING'
    }

    if (redirectToReferrer === true) {
        return <Redirect to={from} />
      }

    return (
      
      <div className="login-widget">
        <p>Login To Play</p>
      
        <div className="user-selection-dropdown">
         <select
           onChange={this.saveUserToState}
           defaultValue='default'>
           <option
            disabled
            value='default'>
            Choose user
            </option>
            {Object.keys(users).map(user => (
              <option
               key={users[user].id}
               value={users[user].id}>
               {users[user].name}
              </option>
             ))}
          </select>
      </div>
              
      
        <Link to="/" onClick={this.onSignInClick}>Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    )
  }
}

 function mapStateToProps({ users }) {
    return {
      users: users
        ? users
        : {}
    }
  }

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(handleUserList()),
    signUserIn: (id) => {dispatch(setAuthenticatedUser(id))}
  }
}


 export default connect(mapStateToProps, mapDispatchToProps)(LoginWidget)