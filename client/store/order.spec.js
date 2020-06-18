/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {getCartThunk, addProductThunk, removeProductThunk} from './order'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {cart: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('getCartThunk', () => {
    it('eventually dispatches the GET_CART action', async () => {
      const fakeUser = {id: '1'}
      const fakeCart = {
        id: 6,
        date: '2020-06-18T15:50:51.706Z',
        quantity: 1,
        price: 100,
        address: null,
        billing: null,
        status: 'cart',
        createdAt: '2020-06-18T15:50:51.706Z',
        updatedAt: '2020-06-18T15:50:51.739Z',
        userId: 1
      }
      mockAxios.onGet('/api/orders/1').replyOnce(200, fakeCart)
      await store.dispatch(getCartThunk(fakeUser))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_CART')
      expect(actions[0].cart).to.be.deep.equal(fakeCart)
    })
  })

  describe('addProductThunk', () => {
    it('addProductThunk: eventually dispatches the GET_CART action', async () => {
      const fakeUser = {id: '1'}
      const fakeProduct = {
        id: 2,
        name: 'indignitas',
        price: 100,
        description: 'I like this one. Anger gets stuff done.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5,
        createdAt: '2020-06-17T16:10:23.422Z',
        updatedAt: '2020-06-17T16:10:23.430Z',
        categoryId: 2
      }
      const fakeCart = {
        id: 6,
        date: '2020-06-18T15:50:51.706Z',
        quantity: 1,
        price: 100,
        address: null,
        billing: null,
        status: 'cart',
        createdAt: '2020-06-18T15:50:51.706Z',
        updatedAt: '2020-06-18T15:50:51.739Z',
        userId: 1
      }
      mockAxios.onPost('/api/orders/1', fakeProduct).replyOnce(201, fakeCart)
      await store.dispatch(addProductThunk(fakeUser, fakeProduct))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_CART')
    })
  })
})
