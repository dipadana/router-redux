import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT, ADD } from './contants'

const initialCounter = {
  count: 0
}

function counterReducer(state = initialCounter, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return { count: state.count - 1 }
    case ADD:
      return { count: state.count + action.number }
    default:
      return state
  }
}


function userReducer(state = null, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.user
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter: counterReducer, user: userReducer })

export default rootReducer
