import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA'

//this set of functions was created in order to simulate something closer to a real world scenario, where questions data wouldn't be accessible until after the login.
export function getUsers() {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users
  }))
}

export function getQuestions() {
  return Promise.all([
    _getQuestions(),
  ]).then(([questions]) => ({
    questions
  }))
}


export function getAllData() {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users,questions]) => ({
    users,
    questions
  }))
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data)
}