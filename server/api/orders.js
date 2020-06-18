const router = require('express').Router()
const {Orders, Product, User} = require('../db/models')
module.exports = router

//get a users order where status = cart
// '/api/orders/:userId'
router.get('/:userId', async (req, res, next) => {
  try {
    let order = await Orders.findOne({
      where: {userId: req.params.userId, status: 'cart'}
    })
    if (!order) {
      order = await Orders.create({userId: req.params.userId, status: 'cart'})
    }
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//user can add products to cart
// '/api/orders/:userid'
//To do
//add quantity
//add to price
//check if cart exists

router.post('/:userId', async (req, res, next) => {
  try {
    const product = await Product.findOne({where: {id: req.body.id}})

    let order = await Orders.findOne({
      where: {userId: req.params.userId, status: 'cart'}
    })
    if (!order) {
      order = await Orders.create({userId: req.params.userId, status: 'cart'})
    }
    await order.addProduct(product)
    await order.increment({quantity: 1, price: product.price})
    res.json(order)
  } catch (error) {
    next(error)
  }
})
//user can remove products from cart
router.delete('/:userId', async (req, res, next) => {
  try {
    const product = await Product.findOne({where: {id: req.body.id}})

    let order = await Orders.findOne({
      where: {userId: req.params.userId, status: 'cart'}
    })
    if (!order) {
      res.status(500).send('Cart is already empty')
    }
    await order.removeProduct(product)
    await order.increment({quantity: -1, price: -product.price})
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//user can checkout (set status of order to processing)

router.put('/:userId', async (req, res, next) => {
  try {
    const order = await Orders.findOne({
      where: {userId: req.params.userId, status: 'cart'}
    })
    if (!order) {
      res.status(500).send('Cart is empty!')
    }
    order.status = 'processing'
    order.save()
    res.json(order)
  } catch (error) {
    next(error)
  }
})
