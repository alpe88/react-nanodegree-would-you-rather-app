//this file contains the action creator and associated constant that will be dispatched when we need to recieve our users.

//this action type occurs when we recieve our users.
export const RECEIVE_USERS = 'RECIEVE_USERS'

//this function executes when the action creator is dispatched.
export function receiveUsers(users) {
	return {
    	type: RECEIVE_USERS,
      	users
    }
}