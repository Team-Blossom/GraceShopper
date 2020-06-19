import axios from 'axios'

//ACTION TYPES
const GET_CART = 'GET_CART'

//ACTION CREATORS
const getCart = cart => ({type: GET_CART, cart})

//THUNK CREATORS
export const getCartThunk = () => async dispatch => {
  //is user logged in
  try {
    const cart = await axios.get(`/api/orders/`)
    dispatch(getCart(cart.data))
  } catch (error) {
    console.error(error)
  }
}

export const addProductThunk = product => async dispatch => {
  try {
    const cartWithNewItem = await axios.post(`/api/orders/`, product)
    dispatch(getCart(cartWithNewItem.data))
  } catch (error) {
    console.error(error)
  }
}

export const removeProductThunk = product => async dispatch => {
  try {
    const cartWithoutOldItem = await axios.delete(`/api/orders/`, product)
    dispatch(getCart(cartWithoutOldItem.data))
  } catch (error) {
    console.error(error)
  }
}

//INITIAL STATE
const defaultCart = {}

//REDUCER
export default function(state = defaultCart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
