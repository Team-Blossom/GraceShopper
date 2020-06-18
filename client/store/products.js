import axios from 'axios'

//const GET_PRODUCT = 'GET_PRODUCT'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'

//const getProduct = id =>({type:GET_PRODUCT, id})
const getProducts = products => ({type: GET_PRODUCTS, products})
const getProduct = product => ({type: GET_PRODUCT, product})
//add product
//delete product

export const fetchProducts = () => {
  return async dispatch => {
    const products = await axios.get('/api/products')
    dispatch(getProducts(products.data))
  }
}

export const fetchProduct = id => {
  return async dispatch => {
    const product = await axios.get(`/api/products/${id}`)

    dispatch(getProduct(product.data))
  }
}
const initialState = {product: {}, products: []}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...initialState, products: action.products}
    case GET_PRODUCT:
      return {...initialState, product: action.product}
    default:
      return state
  }
}
