//this file contains the action creator and associated constant that will be dispatched when we need to recieve our questions.

//this action type occurs when we recieve our questions.
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'SAVE_OPTION_CHOICE'

//this function executes when the action creator is dispatched in the shared.js file.
export function receiveQuestions(questions) {
	return {
    	type: RECEIVE_QUESTIONS,
      	questions
    }
}

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  }
}