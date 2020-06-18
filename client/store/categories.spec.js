/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchCategory} from './categories'
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

  const initialState = {category: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchCategory', () => {
    it('eventually dispatches the GET_CATEGORY action', async () => {
      const category = {name: 'product', id: 1, products: []}
      mockAxios.onGet('/api/categories/1').replyOnce(200, category)
      await store.dispatch(fetchCategory(1))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_CATEGORY')
      expect(actions[0].category).to.be.deep.equal(category)
    })
  })
})
