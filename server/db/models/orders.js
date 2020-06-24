const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  price: {
    type: Sequelize.FLOAT(12, 2),
    defaultValue: 0
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
  //   userId: {
  //     type: Sequelize.INTEGER
  //   }
})

module.exports = Orders
