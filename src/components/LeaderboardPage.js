import React, { Component } from 'react'

import { connect } from 'react-redux'

import UserPanel from './UserPanel'

class LeaderboardPage extends Component {
  
  countUserQuestions = id => {
    return this.props.users[id].questions.length
  }

  countUserAnswers = id => {
    return Object.keys(this.props.users[id].answers).length
  }

  totalUserScore = id => {
    return this.countUserQuestions(id) + this.countUserAnswers(id)
  }
  
  render() {
    const { users } = this.props
    const userIds = Object.keys(users).sort((a,b) => this.totalUserScore(b) - this.totalUserScore(a))

    return (
      <div className="leaderboard">
      {userIds.map((id, rank) => (
        <div key={id} className="user">
         <UserPanel id={id} rank={rank} questionCount={this.countUserQuestions(id)}
              answerCount={this.countUserAnswers(id)} score={this.totalUserScore(id)} />
         </div>
       ))}
      </div>
    )
  }
}
function mapStateToProps({ users, questions }) {
  
  return {
    users: users
      ? users
      : {},
    questions: questions
      ? questions
      : {},
  }
}

export default connect(mapStateToProps)(LeaderboardPage)