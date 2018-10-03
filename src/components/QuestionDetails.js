import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleAnswerQuestion } from '../actions/questions'

class QuestionDetails extends Component {
     state = { 
       isActiveOne: false,
       isActiveTwo: false,
       loading: true
     }
   componentDidMount() {
      this.setState({ loading: false })
    }
    onAnswerOptionClick = (authedUser, id, answer) => {
      let optionChosen = ''
      if(answer === 'optionOne') { 
        optionChosen = 'optionOne'
        this.setState({ isActiveOne: true })
      } else if (answer === 'optionTwo') {
         optionChosen = 'optionTwo'
         this.setState({ isActiveTwo: true })
      } else { alert('Please select an option.') }
      this.props.saveAnswer(authedUser, id, optionChosen)
      this.forceUpdate()
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
    calculatePercent = (count,total) => {
      return count/total*100
    }

  render() {
    if(this.state.loading) {
      return 'LOADING'
    }
    const { questions, users, authedUser, id } = this.props
    const question = questions[id]
    const user = users[question.author]
    const currentUser = users[authedUser]

    if (question === null) {
       return <p>The questions does not exist</p>
    }
    if (user === null) {
       return <p>The questions does not exist</p>
    }

    const addBorderStyle = {
      border: '1px solid green',
    }
    const removeBorderStyle = {
      border: '0'
    }
    const clickableElementStyle = {
      cursor: 'pointer'
    }

    const {
     optionOne, optionTwo
    } = question

    const { name, avatarURL } = user

    return (
      <div key={id} className="question-details">
      {currentUser.answers.hasOwnProperty(id) ? (
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
            <p style={ addBorderStyle } className="card-text question-option-one">{optionOne.text} with {this.countOptionOne(id)} of {this.countTotalVotes(id) } votes ({this.calculatePercent(this.countOptionOne(id),this.countTotalVotes(id))}%).</p>
             ) : (
              <p className="card-text question-option-one">{optionOne.text} with {this.countOptionOne(id)} of {this.countTotalVotes(id) } votes ({this.calculatePercent(this.countOptionOne(id),this.countTotalVotes(id))}%).</p>
             )}
             <p>OR</p>
             {optionTwo.votes.indexOf(authedUser) > -1 ? (
              <p style={ addBorderStyle } className="card-text question-option-two">{optionTwo.text} with {this.countOptionTwo(id)} of {this.countTotalVotes(id) } votes ({this.calculatePercent(this.countOptionTwo(id),this.countTotalVotes(id))}%).</p>
               ) : (
                <p className="card-text question-option-one">{optionTwo.text} with {this.countOptionTwo(id)} of {this.countTotalVotes(id) } votes  ({this.calculatePercent(this.countOptionTwo(id),this.countTotalVotes(id))}%).</p>
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
                            <div style={ clickableElementStyle }>
                              <p onClick={() => this.onAnswerOptionClick(authedUser, id, 'optionOne')} style={ this.state.isActiveOne ? (addBorderStyle) : (removeBorderStyle) } className="card-text question-option-one">{optionOne.text}</p>
                            </div>
                            <p>OR</p>
                            <div style={ clickableElementStyle }>
                              <p onClick={() => this.onAnswerOptionClick(authedUser, id, 'optionTwo')} style={ this.state.isActiveTwo ? (addBorderStyle) : (removeBorderStyle) } className="card-text question-option-two">{optionTwo.text}</p>
                            </div>
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
  const qid = (id.length && id[0] === ':') ? id.slice(1) : id
  return {
    questions: questions
       ? questions
       : {},
    users: users
       ? users
       : {},
    id: qid,
    authedUser: authedUser
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveAnswer: (authedUser, id, answer) => dispatch(handleAnswerQuestion(authedUser, id, answer)),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionDetails))