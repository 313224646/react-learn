import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
import { fetchBaseFiles } from '../api/user'

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value,
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = index => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = data => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    fetchBaseFiles().then(
      res => {
        const data = res.paging.map(item => item.fileName)
        const action = getListAction(data)
        dispatch(action)
      }
    )
  }
}