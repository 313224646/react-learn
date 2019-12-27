const defalutState = {
  inputValue: 'jspang',
  list: [],
}

export default (state = defalutState, action) => {
  let newState
  switch (action.type) {
    case 'change_input':
      newState = Object.assign({}, state)
      newState.inputValue = action.value
      return newState
    case 'add_item':
      newState = Object.assign({}, state)
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    default:
      return state
  }
}