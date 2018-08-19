//more on why and when to use curly brackets in import statement can be found here: https://stackoverflow.com/questions/41337709/what-is-use-of-curly-braces-in-es6-import-statement

import { combineReducers } from 'redux'

import authedUser from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
	authedUser,
  	users,
  	questions
})