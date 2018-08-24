import { RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions (state = {}, action) {
	switch(action.type) {
      case RECEIVE_QUESTIONS :
        return {
          //here we are getting everything that was in the questions slice of state before the action as well as the questions that were recieved.
        	...state,
            ...action.questions
        }
        default :
        	//always return same state that was received when nothing was received
        	return state
    }
}