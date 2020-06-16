const {Sequelize, STRING} = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT(12, 2)
  },
  description: {
    type: Sequelize.TEXT
  },
  pictures: {
    type: Sequelize.ARRAY(STRING)
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = Products
