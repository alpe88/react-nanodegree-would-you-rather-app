import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleAnswerSelection } from '../actions/shared'

class QuestionDetails extends Component {
     
    onAnswerOptionClick = (qid, answer) => {
      console.log('id ',qid)
      console.log('answerOption ',answer)
      this.props.saveAnswer(qid, answer)
    }
    
    countOptionOne = (id) => {
      return this.props.questions[id].optionOne.votes.length
    }
    countOptionTwo = (id) => {
      return this.props.questions[id].optionTwo.votes.length
    }
    countTotalVotes = (id) => {
      return this.countOptionOne(id) + this.countOptionTwo(id)
    }

  render() {
    const { questions, users, authedUser, id } = this.props
    const qid = (id.length && id[0] === ':') ? id.slice(1) : id
    const question = questions[qid]
    
    const user = users[question.author]
    const currentUser = users[authedUser]
    console.log('question ',question)
    console.log('user', user)
console.log('currentUser', currentUser)
    if (question === null) {
       return <p>The questions does not exist</p>
    }
    if (user === null) {
       return <p>The questions does not exist</p>
    }

    const addBorderStyle = {
      border: '1px solid green'
    }
    const clickableElementStyle = {
      cursor: 'pointer'
    }
    const {
     optionOne, optionTwo
    } = question

    const { name, avatarURL } = user
    return (
      <div className="question-details">
      {currentUser.answers.hasOwnProperty(qid) ? (
                <div className="question py-1">
                  <div className="container">
                    <div className="card py-3">
                      <div className="row">
                        <div className="col-md-4">
                            <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar-big" />
                          </div>
                          <div className="col-md-4">
                            <div className="card-block">
                              <h4 className="card-title">{name} asked would you rather:</h4>
                              {optionOne.votes.indexOf(authedUser) > -1 ? (
                                                    <p style={ addBorderStyle } className="card-text question-option-one">{optionOne.text} with {this.countOptionOne(qid)} of {this.countTotalVotes(qid) } votes.</p>
                                                    ) : (
                                                    <p className="card-text question-option-one">{optionOne.text} with {this.countOptionOne(qid)} of {this.countTotalVotes(qid) } votes.</p>
                                                    )}
                                                    <p>OR</p>
                              {optionTwo.votes.indexOf(authedUser) > -1 ? (
                                                    <p style={ addBorderStyle } className="card-text question-option-two">{optionTwo.text} with {this.countOptionTwo(qid)} of {this.countTotalVotes(qid) } votes.</p>
                                                    ) : (
                                                    <p className="card-text question-option-one">{optionTwo.text} with {this.countOptionTwo(qid)} of {this.countTotalVotes(qid) } votes.</p>
                                                    )}
                            </div>
                          </div>
                          <div className="col-md-4">

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      ) : (
              <div className="question py-1">
                <div className="container">
                  <div className="card py-3">
                    <div className="row">
                      <div className="col-md-4">
                          <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar-big" />
                        </div>
                        <div className="col-md-4">
                          <div className="card-block">
                            <h4 className="card-title">{name} asked would you rather:</h4>
                            <p onClick={() => this.onAnswerOptionClick(qid, optionOne)} style={ clickableElementStyle } className="card-text question-option-one">{optionOne.text}</p><p>OR</p>
                            <p onClick={() => this.onAnswerOptionClick(qid, optionTwo)} style={ clickableElementStyle } className="card-text question-option-two">{optionTwo.text}</p>
                          </div>
                        </div>
                        <div className="col-md-4">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      )}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }, ownProps) {
  const id = ownProps.match.params.id 

  return {
    questions: questions
       ? questions
       : {},
    users: users
       ? users
       : {},
    id: id,
    authedUser: authedUser
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveAnswer: (qid, answer) => dispatch(handleAnswerSelection(qid, answer)),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionDetails))