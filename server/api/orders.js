const router = require('express').Router()
const {Orders, Product, Cart} = require('../db/models')
module.exports = router

// MASTER ROUTES

//get a users order where status = cart
// '/api/orders/'
router.get('/', async (req, res, next) => {
  if (req.user) {
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
  } else {
    try {
      if (!req.session.cart) {
        let order = await Orders.create({userId: 1, status: 'cart'})
        req.session.cart = order
      } else {
        let order = await Orders.findOne({
          where: {id: req.session.cart.id},
          include: {model: Product}
        })
        req.session.cart = order
      }
      res.json(req.session.cart)
    } catch (error) {
      next(error)
    }
  }
})
//user can get their order history
router.get('/myorders', async (req, res, next) => {
  try {
    let order = await Orders.findAll({
      where: {userId: req.user.id},
      include: {model: Product}
    })
    res.json(order)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

//user can add products to cart
router.post('/', async (req, res, next) => {
  if (req.user) {
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
  } else {
    try {
      const product = await Product.findOne({
        where: {id: req.body.id}
      })
      let order
      if (!req.session.cart) {
        order = await Orders.create({userId: 1, status: 'cart'})
        req.session.cart = order
      } else {
        order = await Orders.findOne({where: {id: req.session.cart.id}})
        req.session.cart = order
      }

      let cartItem = await Cart.findOne({
        where: {orderId: order.id, productId: product.id}
      })

      if (cartItem) {
        await cartItem.increment({quantity: 1})
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
  if (req.user) {
    try {
      const product = await Product.findOne({where: {id: req.params.productId}})

      const order = await Orders.findOne({
        where: {userId: req.user.id, status: 'cart'}
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
  } else {
    try {
      const product = await Product.findOne({where: {id: req.params.productId}})

      const order = await Orders.findOne({
        where: {id: req.session.cart.id}
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
  if (req.user) {
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
  } else {
    const product = await Product.findOne({where: {id: req.params.productId}})

    const order = await Orders.findOne({
      where: {id: req.session.cart.id},
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
  }
})

//user can checkout (set status of order to processing)
router.put('/', async (req, res, next) => {
  if (req.user) {
    try {
      const order = await Orders.findOne({
        where: {userId: req.user.id, status: 'cart'}
      })
      if (!order) {
        res.status(500).send('Cart is empty!')
      }
      console.log(req.body.status)
      order.status = req.body.status
      order.save()
      res.json(order)
    } catch (error) {
      next(error)
    }
  } else {
    try {
      const order = await Orders.findOne({
        where: {id: req.session.cart.id}
      })
      if (!order) {
        res.status(500).send('Cart is empty!')
      }

      order.status = req.body.status
      order.save()
      req.session.cart = {}

      res.json(order)
    } catch (error) {
      next(error)
    }
  }
})

//ALCHEMIST ROUTES

//get all orders from '/api/orders/all'
router.get('/all', async (req, res, next) => {
  try {
    const allOrders = await Orders.findAll()
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

//delete an order from '/api/orders/all/:orderId'
router.delete('/all/:orderId', async (req, res, next) => {
  try {
    await Orders.destroy({where: {id: req.params.orderId}})
    res.sendStatus('204')
  } catch (error) {
    next(error)
  }
})
