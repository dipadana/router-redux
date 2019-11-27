import { ADD } from './contants'

export function updateCount(change) {
  return { type: ADD, number: change }
}

export function login_success(user) {
  return { type: 'LOGIN_SUCCESS', user }
}

export const login = () => async dispatch => {
  const response = await fetch('https://uinames.com/api/?ext')
  const user = await response.json()
  dispatch(login_success(user))
}