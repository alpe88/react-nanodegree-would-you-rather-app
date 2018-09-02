//importing the initial data from our api.
import { getUsers, getQuestions, getAllData, saveQuestionAnswer } from '../utils/api'

import { receiveUsers } from '../actions/users'
import { receiveQuestions, answerQuestion } from '../actions/questions'

//we get all users with this function
export function handleUserList() {
	return (dispatch) => {
    	return getUsers()
      		.then(({users}) => {
          		dispatch(receiveUsers(users))
        })
    }
}

//we get all questions with this function
export function handleQuestionsList() {
	return (dispatch) => {
    	return getQuestions()
      		//this promise wil give us objects with users.
      		.then(({questions}) => {
          		dispatch(receiveQuestions(questions))
        })
    }
}

//we are exporting a function using the Redux Thunk function because we need to get data asyncronously.
export function handleAllData() {
	return (dispatch) => {
    	return getAllData()
      		//this promise wil give us objects with users and questions properties and then add them to our store.
      		.then(({users, questions}) => {
        		//these dispatch calls still need reducers.
          		dispatch(receiveUsers(users))
          		dispatch(receiveQuestions(questions))
        })
    }
}


export function handleAnswerSelection(qid, answer) {
     return (dispatch, getState) => {
       const { authedUser } = getState()
       //dispatch to api
       dispatch(answerQuestion({
            authedUser,
            qid,
            answer
       }))
       //then return state
       return saveQuestionAnswer({
        authedUser,
        qid,
        answer
      })
    }
}