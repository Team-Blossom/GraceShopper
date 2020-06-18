import axios from 'axios'

const SET_PRODUCTS = 'SET_PRODUCTS'

const getProducts = products => ({type: SET_PRODUCTS, products})

//add product
//delete product

export const fetchProducts = () => {
  return async dispatch => {
    const products = await axios.get('/api/products')
    dispatch(getProducts(products.data))
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products

    default:
      return state
  }
}
