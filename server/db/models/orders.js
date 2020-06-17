const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  date: {
    type: Sequelize.DATE
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.FLOAT(12, 2)
  },
  address: {
    type: Sequelize.STRING
  },
  billing: {
    type: Sequelize.BIGINT
  },
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['cart', 'processing', 'canceled', 'completed']]
    }
  }
})

module.exports = Orders
