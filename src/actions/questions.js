//this file contains the action creator and associated constant that will be dispatched when we need to work with questions.
import { saveQuestion, saveQuestionAnswer } from '../utils/api'


//this action type occurs when we recieve our questions.
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

//this function executes when the action creator is dispatched in the shared.js file.
export function receiveQuestions(questions) {
	return {
    	type: RECEIVE_QUESTIONS,
      	questions
    }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddingAQuestion(question) {
  return (dispatch) => {
    dispatch(addQuestion(question))
    return saveQuestion(question).catch((e) => {
          console.warn('Error in handleAddQuestion: ', e)
          dispatch(addQuestion(question))
          alert('Your question was not added. Please try again.')
       })
    }
  }

export function answerQuestion({ authedUser, id, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    id,
    answer,
  }
}

export function handleAnswerQuestion(authedUser, id, answer) {
    const data = {
      authedUser: authedUser,
      id,
      answer: answer
    }
     return (dispatch) => {
       //dispatch to api
       dispatch(answerQuestion(data))

       return saveQuestionAnswer((data)).catch((e) => {
          console.warn('Error in handleAnswerQuestion: ', e)
          dispatch(answerQuestion((data)))
          alert('Your answer was not recorded. Please try again.')
       })
    }
}