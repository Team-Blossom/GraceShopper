const router = require('express').Router()
const {Product, Category} = require('../db/models')

// '/api/products'
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// '/api/products/1'
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {id: req.params.productId},
      include: Category
    })
    res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = router
