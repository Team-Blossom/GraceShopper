const db = require('../db')
const User = require('./user')
const Orders = require('./orders')
const Category = require('./categories')
const Product = require('./products')
// const {Sequelize} = require('sequelize/types')
const Sequelize = require('sequelize')

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

const Cart = db.define(
  'cart',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  },
  {timestamps: false}
)
Orders.belongsToMany(Product, {through: Cart})
Product.belongsToMany(Orders, {through: Cart})

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = {
  User,
  Orders,
  Category,
  Product,
  Cart
}
