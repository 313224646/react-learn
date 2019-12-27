import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState
  switch (action.type) {
    case CHANGE_INPUT:
      newState = Object.assign({}, state)
      newState.inputValue = action.value
      return newState
    case ADD_ITEM:
      newState = Object.assign({}, state)
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DELETE_ITEM:
      newState = Object.assign({}, state)
      newState.list.splice(action.index, 1)
      return newState
    case GET_LIST:
      newState = Object.assign({}, state)
      newState.list = action.data
      return newState
    default:
      return state
  }
}