import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleAddingAQuestion } from '../actions/questions'

class AskaQuestionPage extends Component {
  state = {
    loading: true,
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  componentDidMount() {
       this.setState({ loading: false })
  }


  handleOnChangeOptionOneInputBox = (event) => {
    this.setState({ optionOneText: event.target.value })
  }

  handleOnChangeOptionTwoInputBox = (event) => {
    this.setState({ optionTwoText: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { authedUser } = this.props
    
    let question = {
       optionOneText: optionOneText,
       optionTwoText: optionTwoText,
       author: authedUser
    }

    if (optionOneText && optionTwoText) {
      this.props.addAQuestion(question)
    }
    
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    }))
  }


  render() {
    const { optionOneText, optionTwoText, toHome } = this.state
    if(this.state.loading) {
      return 'LOADING'
    }
    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="ask-a-question">
        <div className="container">
         <h4>Add a Question:</h4><br /><h2>Would You Rather:</h2>
         <form onSubmit={ this.handleSubmit }>
          
          <div className="form-group row">
            <label htmlFor="would-you-rather-option-one" className="col-4 col-form-label">Option One: </label> 
            <div className="col-8">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className=""></i>
                </div> 
                <input id="would-you-rather-option-one" name="would-you-rather-option-one" type="text" className="form-control here" value={optionOneText} onChange={this.handleOnChangeOptionOneInputBox} />
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="would-you-rather-option-two" className="col-4 col-form-label">Option Two: </label> 
            <div className="col-8">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className=""></i>
                </div> 
                <input id="would-you-rather-option-two" name="would-you-rather-option-two" type="text" className="form-control here" value={optionTwoText} onChange={this.handleOnChangeOptionTwoInputBox} />
              </div>
            </div>
          </div>
    
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button name="submit" type="submit" className="btn btn-primary" disabled={optionOneText === '' || optionTwoText === ''}>Add Question</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  
  return {
   authedUser: authedUser
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addAQuestion: (question) => dispatch(handleAddingAQuestion(question))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AskaQuestionPage)