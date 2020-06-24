const {Sequelize, STRING} = require('sequelize')
const db = require('../db')

function makeArr(str) {
  if (typeof str === 'string') {
    return str.split(', ')
  } else {
    return str
  }
}

const Product = db.define('products', {
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
    type: Sequelize.ARRAY(Sequelize.TEXT),
    set(value) {
      this.setDataValue('pictures', makeArr(value))
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = Product
