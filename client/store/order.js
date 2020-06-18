import axios from 'axios'

//ACTION TYPES
const GET_CART = 'GET_CART'
const ADD_PRODUCT = 'ADD_PRODUCT'

//ACTION CREATORS
const getCart = cart => ({type: GET_CART, cart})

//THUNK CREATORS
export const getCartThunk = user => async dispatch => {
  try {
    const cart = await axios.get(`/api/orders/${user.id}`)
    dispatch(getCart(cart))
  } catch (error) {
    console.error(error)
  }
}

export const addProductThunk = (user, product) => async dispatch => {
  try {
    const cartWithNewItem = await axios.post(`/api/orders/${user.id}`, product)
    dispatch(getCart(cartWithNewItem))
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
