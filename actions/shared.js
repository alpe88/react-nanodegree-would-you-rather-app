//importing the initial data from our api.
import { getInitialData } from '../utils/api'

import { receiveUsers } from '../actions/users'
import { recieveQuestions } from '../actions/questions'

import { setAuthenticatedUser } from '../actions/authedUser'


const testing = true
const AUTHENTICATED_USER_ID = 'sarahedo'


//we are exporting a function using the Redux Thunk function because we need to get data asyncronously.
export function handleInitialData() {
	return (dispatch) => {
    	return getInitialData()
      		//this promise wil give us objects with users and questions properties and then add them to our store.
      		.then(({users, questions}) => {
        		//these dispatch calls still need reducers.
          		dispatch(receiveUsers(users))
          		dispatch(recieveQuestions(questions))
          
                if(testing) {
                  dispatch(setAuthenticatedUser(AUTHENTICATED_USER_ID))
                }
          
        })
    }
}