import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Question extends Component {

  render() {

    const { question, user, authedUser } = this.props
    
    if (question === null) {
       return <p>The questions does not exist</p>
    }
    if (user === null) {
       return <p>The questions does not exist</p>
    }

    const addBorderStyle = {
      border: '1px solid green'
    }

    const {
     id, optionOne, optionTwo
    } = question
    const { name, avatarURL } = user
    
    return (
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
                     {question.optionOne.votes.indexOf(authedUser) > -1 ? (
                      <p style={ addBorderStyle } className="card-text question-option-one">{optionOne.text}</p>
                      ) : (
                      <p className="card-text question-option-one">{optionOne.text}</p>
                      )}
                      <p>OR</p>
                     {question.optionTwo.votes.indexOf(authedUser) > -1 ? (
                      <p style={ addBorderStyle } className="card-text question-option-two">{optionTwo.text}</p>
                      ) : (
                      <p className="card-text question-option-one">{optionTwo.text}</p>
                      )}
                  </div>
                </div>
                <div className="col-md-4">
                 {question.optionOne.votes.indexOf(authedUser) > -1 || question.optionTwo.votes.indexOf(authedUser) > -1 ? (
                  <Link to={`/questions/:${id}`} className="btn btn-primary">SEE RESULTS</Link>
                  ) : (
                   <Link to={`/questions/:${id}`} className="btn btn-primary">ANSWER QUESTION</Link>
                  )}

                </div>
              </div>
            </div>
    </div>
  </div>
    )
  }
}
function mapStateToProps ({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const user = users[question.author] || users[authedUser]
  return {
    authedUser: authedUser,
    question: question,
    user: user
  }
}

 export default withRouter(connect(mapStateToProps)(Question))