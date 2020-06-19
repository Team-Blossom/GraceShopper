const router = require('express').Router()
const {Orders, Product, Cart} = require('../db/models')
module.exports = router

//get a users order where status = cart
// '/api/orders/'
router.get('/', async (req, res, next) => {
  try {
    let order = await Orders.findOne({
      where: {userId: req.user.id, status: 'cart'},
      include: {model: Product}
    })
    if (!order) {
      order = await Orders.create({userId: req.user.id, status: 'cart'})
    }
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//user can add products to cart
// '/api/orders/'
//To do
//add quantity
//add to price
//check if cart exists

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.findOne({where: {id: req.body.id}})

    let order = await Orders.findOne({
      where: {userId: req.user.id, status: 'cart'}
    })
    if (!order) {
      order = await Orders.create({userId: req.user.id, status: 'cart'})
    }
    let cartItem = await Cart.findOne({
      where: {orderId: order.id, productId: product.id}
    })
    if (cartItem) {
      await cartItem.increment({quantity: 1})
    }
    await order.addProduct(product)
    await order.increment({quantity: 1, price: product.price})
    res.json(order)
  } catch (error) {
    next(error)
  }
})
//user can remove products from cart
router.delete('/', async (req, res, next) => {
  try {
    const product = await Product.findOne({where: {id: req.body.id}})

    let order = await Orders.findOne({
      where: {userId: req.user.id, status: 'cart'}
    })
    if (!order) {
      res.status(500).send('Cart is already empty')
    }
    let cartItem = await Cart.findOne({
      where: {orderId: order.id, productId: product.id}
    })

    if (cartItem) {
      await cartItem.increment({quantity: -1})
    }
    if (cartItem.quantity === 0) {
      await order.removeProduct(product)
    }
    await order.increment({quantity: -1, price: -product.price})
    res.json(order)
  } catch (error) {
    next(error)
  }
})

//user can checkout (set status of order to processing)

router.put('/', async (req, res, next) => {
  try {
    const order = await Orders.findOne({
      where: {userId: req.user.id, status: 'cart'}
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
