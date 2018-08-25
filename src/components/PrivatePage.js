import React, { Component } from 'react'

import { connect } from 'react-redux'

import { handleAllData } from '../actions/shared'
import { unsetAuthenticatedUser } from '../actions/authedUser'

import NavigationSection from './NavigationSection'
import HomePage from './HomePage'
import LeaderboardPage from './LeaderboardPage'
import AskaQuestionPage from './AskaQuestionPage'



class PrivatePage extends Component {
    components = {
        homepage: HomePage,
        leaderboardpage: LeaderboardPage,
        askaquestionpage: AskaQuestionPage
    }
    
     state = {
        loading: true
     }

     onSignOutButtonClick = () => {
         this.props.signUserOut()
     }

      componentDidMount() {
          this.mounted = true
          this.props.getAllData().then(response => {
            if(this.mounted) { 
               this.setState({ loading: false })
            }
          })
      }

      componentWillUnmount(){
        this.mounted = false
      }
  render() {
    const ViewToRender = this.components[this.props.viewtorender]
    const { loading } = this.state
    const { users, questions, authedUser } = this.props
    if(loading) {
      return 'LOADING'
    }
    return (
      <div className="private-page">
         <NavigationSection />
         <div className="app-views">
             <ViewToRender users={users} questions={questions}  />
         </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {

  return {
     users: users
        ? users
        : {},
    questions: questions
        ? questions
        : {},
    authedUser: authedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllData: () => dispatch(handleAllData()),
    signUserOut: () => {dispatch(unsetAuthenticatedUser())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivatePage)