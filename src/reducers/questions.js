import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'


export default function questions (state = {}, action) {
	switch(action.type) {
      case RECEIVE_QUESTIONS :
        return {
          //here we are getting everything that was in the questions slice of state before the action as well as the questions that were recieved.
        	...state,
            ...action.questions
        }
     case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
      case ANSWER_QUESTION :
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            [action.answer]: {
              ...state[action.id][action.answer],
              votes: state[action.id][action.answer].votes.concat([action.authedUser])
            }
          }
        }
        default :
        //always return same state that was received when nothing was received
            return state
    }
}