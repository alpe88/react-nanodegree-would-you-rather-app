import { RECIEVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
	switch(action.type) {
      case RECEIVE_USERS :
        return {
          //here we are getting everything that was in the users slice of state before the action as well as the users that were recieved.
        	...state,
            ...action.users
        }
        default :
        	//always return same state by default
        	return state
    }
}