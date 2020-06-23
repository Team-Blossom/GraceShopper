const Category = require('../db/models/categories')
const Product = require('../db/models/products')
const router = require('express').Router()

//get all categories
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (error) {
    next(error)
  }
})

//get one category with associated products
router.get('/:categoryId', async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: {id: req.params.categoryId},
      include: {model: Product, where: {categoryId: req.params.categoryId}}
    })
    await res.json(category)
  } catch (error) {
    next(error)
  }
})

//create category
router.post('/', async (req, res, next) => {
  try {
    const category = await Category.create(req.body)
    res.json(category)
  } catch (error) {
    next(error)
  }
})
//delete category
router.delete('/', async (req, res, next) => {
  try {
    await Category.destroy({where: {id: req.body.id}})
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

module.exports = router
