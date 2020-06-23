import axios from 'axios'

const SET_PRODUCT = 'SET_PRODUCT'

const getProduct = product => ({type: SET_PRODUCT, product})

export const fetchProduct = id => {
  return async dispatch => {
    const product = await axios.get(`/api/products/${id}`)

    dispatch(getProduct(product.data))
  }
}
export default function(state = {}, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product
    default:
      return state
  }
}
