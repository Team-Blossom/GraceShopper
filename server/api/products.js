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

router.delete('/:productId', async (req, res, next) => {
  try {
    await Product.destroy({where: {id: req.params.productId}})
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      price: req.body.price,
      pictures: req.body.pictures,
      description: req.body.description,
      categoryId: req.body.categoryId
    })
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', async (req, res, next) => {
  try {
    const prod = await Product.findOne({
      where: {
        id: req.params.productId
      }
    })
    prod.update(req.body)
    prod.save()
    res.json(prod)
  } catch (error) {
    next(error)
  }
})

module.exports = router
