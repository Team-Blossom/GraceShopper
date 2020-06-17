const db = require('../server/db')
const {User} = require('../server/db/models')

async function seedUsers() {
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstname: 'Harry',
      lastname: 'Potter',
      email: 'theboywholived@email.com',
      password: '123'
    }),
    User.create({
      firstname: 'Saruman',
      lastname: 'the White',
      email: 'powerhungry9000@email.com',
      password: '123'
    }),
    User.create({
      firstname: 'Gandalf',
      lastname: 'The Grey',
      email: 'staffelf@email.com',
      password: '123',
      role: 'Alchemist'
    }),
    User.create({
      firstname: 'Albus',
      lastname: 'Dumbledore',
      email: 'badass109@gmail.com',
      password: 'harry',
      role: 'Alchemist'
    }),
    User.create({
      firstname: 'Doctor',
      lastname: 'Strange',
      email: 'strangerdanger@email.com',
      password: '123'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

module.exports = seedUsers
