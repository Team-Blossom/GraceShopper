const db = require('../server/db')
const {Orders} = require('../server/db/models')

async function orderSeed() {
  await db.sync({force: true})
  console.log('db synced!')

  const orders = await Promise.all([
    Orders.create({
      quantity: 1,
      price: 12.99,
      status: 'cart',
      date: new Date(),
      address: '1719 W Chicago Ave, Chicago, IL, 60622',
      billing: 1573850345838567
    }),
    Orders.create({
      quantity: 2,
      price: 45.67,
      status: 'processing',
      date: new Date(),
      address: '853 Horatio Blvd, Buffalo Grove, IL, 60084',
      billing: 3967849556733456
    }),
    Orders.create({
      quantity: 6,
      price: 453.67,
      status: 'cart',
      date: new Date(),
      address: '543 Magical Ln, Magicland, Mg, 12345',
      billing: 1949503868495048
    }),
    Orders.create({
      quantity: 2,
      price: 34.67,
      status: 'canceled',
      date: new Date(),
      address: '840 Shrumville Ave, Shrumvalley, Sm, 45322',
      billing: 1948394950056443
    }),
    Orders.create({
      quantity: 2,
      price: 4.67,
      status: 'completed',
      date: new Date(),
      address: '483 Gandolf Ln, Gandolfia, Fl, 23532',
      billing: 3904834739400483
    })
  ])

  console.log(`seeded ${orders.length} orders`)
  console.log('seeded successfully')
}

module.exports = orderSeed
