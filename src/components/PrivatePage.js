import React, { Component } from 'react'

import { connect } from 'react-redux'

import NavigationSection from './NavigationSection'
import LoginWidget from './LoginWidget'
import HomePage from './HomePage'
import QuestionDetails from './QuestionDetails'
import LeaderboardPage from './LeaderboardPage'
import AskaQuestionPage from './AskaQuestionPage'



class PrivatePage extends Component {
    components = {
        homepage: HomePage,
        leaderboardpage: LeaderboardPage,
        askaquestionpage: AskaQuestionPage,
        questiondetails: QuestionDetails
    }
    
     state = {
        loading: true
     }

     componentDidMount() {
       this.setState({ loading: false })
     }

  render() {
    const ViewToRender = this.components[this.props.viewtorender]
    const { loading } = this.state
    if(loading) {
      return 'LOADING'
    }
    return (
      <div className="private-page">
        <NavigationSection />
        {this.props.isLoggedIn === false
          ? <LoginWidget />
          : (
             <div className="app-views">
              <div className="container">
               <div className="row">
                <div className="col-12">
                 <ViewToRender  />
                </div>
               </div>
              </div>
             </div>
            )
          }
      </div>      
      
      
      
      
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null && typeof authedUser === 'string'
  }
}

export default connect(mapStateToProps)(PrivatePage)