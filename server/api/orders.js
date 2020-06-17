const router = require('express').Router()
const {Orders, Product, User} = require('../db/models')
module.exports = router

//user can add products to cart
// '/api/orders/:userid'
router.post('/:userId', async (req, res, next) => {
  try {
    const product = await Product.findOne({where: {id: req.body.id}})
    const newOrder = Orders.create({})
    res.json(product)
  } catch (error) {
    next(error)
  }
})
//user can remove products from cart

//user can checkout (set status of order to processing)
