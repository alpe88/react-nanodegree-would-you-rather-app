//this file contains the action creator and associated constant that will be dispatched when we need to recieve our questions.

//this action type occurs when we recieve our questions.
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'

//this function executes when the action creator is dispatched in the shared.js file.
export function recieveQuestions(questions) {
	return {
    	type: RECIEVE_QUESTIONS,
      	questions
    }
}