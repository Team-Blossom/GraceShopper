/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchProducts, fetchProduct} from './products'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {products: []}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchProducts', () => {
    it('eventually dispatches the GET_PRODUCTS action', async () => {
      const products = [{name: 'henry'}, {name: 'sara'}]
      mockAxios.onGet('/api/products').replyOnce(200, products)
      await store.dispatch(fetchProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      expect(actions[0].products).to.be.deep.equal(products)
    })
  })

  describe('fetchProduct', () => {
    it('eventually dispatches the GET_PRODUCT action', async () => {
      const product = {name: 'product', id: 1}
      mockAxios.onGet('/api/products/1').replyOnce(200, product)
      await store.dispatch(fetchProduct(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_PRODUCT')
      expect(actions[0].product).to.be.deep.equal(product)
    })
  })
})
