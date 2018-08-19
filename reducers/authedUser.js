import { SET_AUTHENTICATED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
	switch(action.type) {
      case SET_AUTHENTICATED_USER :
        //when setting the authenticated user all we need is the id. This will be triggered at signon.
        return action.id
      case UNSET_AUTHENTICATED_USER :
        //when unsetting the authenticated user all we need is to nullify the state. This will be triggered at signout.
        return null
      default :
        return state
    }
}