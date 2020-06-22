const db = require('../server/db')
const {User} = require('../server/db/models')

async function seedUsers() {
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstname: 'Guest',
      lastname: '',
      email: 'guest@email.com',
      password: ''
    }),
    User.create({
      firstname: 'Harry',
      lastname: 'Potter',
      email: 'theboywholived@email.com',
      password: '123',
      addresses: [
        ['342 Drury Ln, Magical Kingdom, Ma, 85764, JN'],
        ['788 Walnut Court Romulus, MI 48174']
      ]
    }),
    User.create({
      firstname: 'Saruman',
      lastname: 'the White',
      email: 'powerhungry9000@email.com',
      password: '123',
      addresses: [
        ['815 North Valley View Dr.Aiken, SC 29803'],
        ['11 St Louis Rd.Chicopee, MA 01020']
      ]
    }),
    User.create({
      firstname: 'Gandalf',
      lastname: 'The Grey',
      email: 'staffelf@email.com',
      password: '123',
      role: 'Alchemist',
      addresses: [
        ['815 North Valley View Dr.Aiken, SC 29803'],
        ['11 St Louis Rd.Chicopee, MA 01020']
      ]
    }),
    User.create({
      firstname: 'Albus',
      lastname: 'Dumbledore',
      email: 'badass109@gmail.com',
      password: 'harry',
      role: 'Alchemist',
      addresses: [
        ['815 North Valley View Dr.Aiken, SC 29803'],
        ['11 St Louis Rd.Chicopee, MA 01020']
      ]
    }),
    User.create({
      firstname: 'Doctor',
      lastname: 'Strange',
      email: 'strangerdanger@email.com',
      password: '123',
      addresses: [
        ['815 North Valley View Dr.Aiken, SC 29803'],
        ['11 St Louis Rd.Chicopee, MA 01020']
      ]
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

module.exports = seedUsers
