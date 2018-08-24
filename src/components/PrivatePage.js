import React, { Component } from 'react'

import {
  Link,
} from 'react-router-dom'

import { connect } from 'react-redux'

import { handleAllData } from '../actions/shared'

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
    if(loading) {
      return 'LOADING'
    }
    return (
      <div className="private-page">
         <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/leaderboard">Leaderboard</Link>{' '}
            <Link to="/ask-a-question">Ask a Question</Link>
         </nav>
      
         <div className="app-views">
             <ViewToRender users={this.props.users} questions={this.props.questions}  />
         </div>
      
      
      </div>
    )
  }
}

function mapStateToProps({ users, questions }) {
  return {
     users: users,
     questions: questions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllData: () => dispatch(handleAllData()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivatePage)