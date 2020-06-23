import axios from 'axios'

const SET_CATEGORY = 'SET_CATEGORY'

const setCategory = category => ({type: SET_CATEGORY, category})

export const fetchCategory = id => {
  return async dispatch => {
    const category = await axios.get(`/api/categories/${id}`)
    dispatch(setCategory(category.data))
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category
    default:
      return state
  }
}
