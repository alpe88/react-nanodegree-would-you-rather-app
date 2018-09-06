import React, { Component } from 'react'

import { connect } from 'react-redux'

import { handleAllData } from '../actions/shared'

import Question from './Question'

class QuestionsList extends Component {
  state = {
      loading: true,
  }
  componentDidMount() {
    this.props.loadAllData().then(response => {
       this.setState({ loading: false })
    })
  }

  render() {

    if(this.state.loading) {
      return 'LOADING'
    }
    const { questionsType, answeredQuestions, unansweredQuestions } = this.props

    return (
        <div className="questions-list">
         {questionsType === 'unanswered' && (
          <div className="questions-unanswered">
              {unansweredQuestions.map((id) => (
                <div key={id} className="unanswered-questions">
                  <Question id={id} />
                </div>
                ))}
          </div>
          )}

         {questionsType === 'answered' && (
            <div className="questions-answered">
                {answeredQuestions.map((id) => (
                  <div key={id} className="answered-questions">
                    <Question id={id} />
                  </div>
                  ))}
            </div>
            )}
        </div>
    )
  }
}
function mapStateToProps ({ authedUser, questions, users }) {
  const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
console.log(questions)
  const user = ( authedUser && users.hasOwnProperty(authedUser) )
    ? users[authedUser]
    : { answers: {} }

  const unansweredQ = questionIds.filter(id => !user.answers.hasOwnProperty(id))
  const answeredQ = questionIds.filter(id => user.answers.hasOwnProperty(id))
  return {
    authedUser,
    unansweredQuestions: unansweredQ,
    answeredQuestions: answeredQ
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllData: () => dispatch(handleAllData())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
