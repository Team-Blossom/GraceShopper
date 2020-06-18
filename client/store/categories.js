import axios from 'axios'

const GET_CATEGORY = 'GET_CATEGORY'
const CREATE_CATEGORY = 'CREATE_CATEGORY'
const DELETE_CATEGORY = 'DELETE CATEGORY'

//create category
//delete category

const getCategory = category => ({type: GET_CATEGORY, category})
const createCategory = category => ({type: CREATE_CATEGORY, category})

export const fetchCategory = id => {
  return async dispatch => {
    const category = await axios.get(`/api/categories/${id}`)
    dispatch(getCategory(category.data))
  }
}

export const newCategory = () => {
  return async dispatch => {
    const category = await axios.post('/api/categories')
    dispatch(createCategory(category.data))
  }
}

const initialState = {categories: [], category: {}}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {...state, category: action.category}
    case CREATE_CATEGORY:
      return [...state.categories, action.category]
    default:
      return state
  }
}
