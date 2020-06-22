const router = require('express').Router()
const {User, Orders} = require('../db/models')
module.exports = router

//get all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
//get all orders associated with one user
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {id: req.params.userId},
      include: Orders
    })

    res.json(user)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// router.get('/login', async (req, res, next) => {
//   try {
//     const user = await User.findOne({where: {email: req.params.email}})
//     res.json(user)
//   } catch (error) {
//     next(error)
//   }
// })

// router.post('/signup', async (req, res, next) => {
//   try {
//     const newUser = await User.create(req.body)

//     res.json(newUser)
//   } catch (error) {
//     console.log(error)
//     next(error)
//   }
// })
