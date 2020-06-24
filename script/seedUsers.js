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
      ],
      billing: [[1234123412341234], [2345234523452345]]
    }),
    User.create({
      firstname: 'Saruman',
      lastname: 'the White',
      email: 'powerhungry9000@email.com',
      password: '123',
      addresses: [
        ['815 North Valley View Dr.Aiken, SC 29803'],
        ['11 St Louis Rd.Chicopee, MA 01020']
      ],
      billing: [[9999888877776666], [1111222233334444]]
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
      ],
      billing: [[5555666677778888], [3333444455556666]]
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
      ],
      billing: [[1234567891234567], [9087654321234567]]
    }),
    User.create({
      firstname: 'Doctor',
      lastname: 'Strange',
      email: 'strangerdanger@email.com',
      password: '123',
      addresses: [
        ['815 North Valley View Dr.Aiken, SC 29803'],
        ['11 St Louis Rd.Chicopee, MA 01020']
      ],
      billing: [[9876765412341234], [9087987676544321]]
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

module.exports = seedUsers
