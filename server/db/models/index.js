const db = require('../db')
const User = require('./user')
const Orders = require('./orders')
const Category = require('./categories')
const Product = require('./products')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Orders)
Orders.belongsTo(User)

Orders.belongsToMany(Products, {through: 'Cart_Products'})
Products.belongsToMany(Orders, {through: 'Cart_Products'})

Categories.hasMany(Products)
Products.belongsTo(Categories)

module.exports = {
  User,
  Orders,
  Product,
  Category,
  db
}
