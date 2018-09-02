import React, { Component } from 'react';

import QuestionsList from './QuestionsList'

class HomePage extends Component {
  state = {
    questionsToDisplay: 'unanswered'
  }
  setQuestionType = (questionType) => {
    setTimeout(() => {this.setState({ questionsToDisplay: questionType })}, 200)
  }
  render() {
    const { questionsToDisplay } = this.state

    const clickableElementStyle = {
      cursor: 'pointer'
    }
    return (
      <div className="home-page">
       <div className="row">
         <div className="col-6">
          <p style={ clickableElementStyle } onClick={() => this.setQuestionType('unanswered')} className="question-type-heading text-center">UNANSWERED</p>
         </div>
         <div className="col-6">
          <p style={ clickableElementStyle } onClick={() => this.setQuestionType('answered')} className="question-type-heading text-center">ANSWERED</p>
         </div>
         <div className="col-12">
          <QuestionsList questionsType={questionsToDisplay} />
         </div>
        </div>
      </div>
    )
  }
}

export default HomePage
