const router = require('express').Router()
const {Orders, Product, Cart} = require('../db/models')
module.exports = router

//get a users order where status = cart
// '/api/orders/'
router.get('/', async (req, res, next) => {
  if (req.user.id) {
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
  }
})

//user can add products to cart
router.post('/', async (req, res, next) => {
  if (req.user.id) {
    try {
      const product = await Product.findOne({
        where: {id: req.body.id}
      })
      let order = await Orders.findOne({
        where: {userId: req.user.id, status: 'cart'},
        include: {model: Product}
      })
      if (!order) {
        order = await Orders.create({userId: req.user.id, status: 'cart'})
      }
      let cartItem = await Cart.findOne({
        where: {orderId: order.id, productId: product.id}
      })
      if (cartItem) {
        await cartItem.increment({quantity: 1})
        console.log(cartItem)
      }
      await order.addProduct(product)
      await order.increment({quantity: 1, price: product.price})
      res.sendStatus(201)
    } catch (error) {
      next(error)
    }
  }
})

//user can remove some products from cart
router.delete('/:productId', async (req, res, next) => {
  if (req.user.id) {
    try {
      const product = await Product.findOne({where: {id: req.params.productId}})

      const order = await Orders.findOne({
        where: {userId: req.user.id, status: 'cart'},
        include: {model: Product}
      })

      if (!order) {
        res.status(500).send('Cart is already empty')
      }

      const cartItem = await Cart.findOne({
        where: {orderId: order.id, productId: product.id}
      })

      if (cartItem) {
        await cartItem.increment({quantity: -1})
      }
      if (cartItem.quantity === 0) {
        await order.removeProduct(product)
      }
      await order.increment({quantity: -1, price: -product.price})
      res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  }
})

//user can remove all of one type of product from cart (row from cart table)
router.delete('/:productId/all', async (req, res, next) => {
  try {
    const product = await Product.findOne({where: {id: req.params.productId}})

    const order = await Orders.findOne({
      where: {userId: req.user.id, status: 'cart'},
      include: {model: Product}
    })

    if (!order) {
      res.status(500).send('Cart is already empty')
    }

    const cartItem = await Cart.findOne({
      where: {orderId: order.id, productId: product.id}
    })

    await order.increment({
      quantity: -cartItem.quantity,
      price: -(product.price * cartItem.quantity)
    })

    await Cart.destroy({
      where: {orderId: order.id, productId: product.id}
    })

    res.sendStatus(204)
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
