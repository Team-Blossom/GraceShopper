import axios from 'axios'

const GET_CATEGORY = 'GET_CATEGORY'
//create category
//delete category

const getCategory = category => ({type: GET_CATEGORY, category})

export const fetchCategory = id => {
  return async dispatch => {
    const category = await axios.get(`/api/categories/${id}`)
    dispatch(getCategory(category.data))
  }
}

const initialState = {categories: [], category: {}}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {...initialState, category: action.category}
    default:
      return state
  }
}
