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
        [
          ['Hermione Granger'],
          ['5555 Diagon Alley'],
          ['Unit 9 1/2'],
          ['London'],
          ['GB'],
          ['12345'],
          ['Earth']
        ],
        [
          ['Sirius Black'],
          ['123 Azkaban'],
          ['Cell 55'],
          ['London'],
          ['GB'],
          ['48174'],
          ['Earth']
        ]
      ],
      billing: [
        [['My Card'], ['1234123412341234'], ['Harry Potter'], ['01'], ['2021']],
        [
          ['Voldemorts Card'],
          ['2345234523452345'],
          ['Tom Riddle'],
          ['04'],
          ['2020']
        ]
      ]
    }),
    User.create({
      firstname: 'Saruman',
      lastname: 'the White',
      email: 'powerhungry9000@email.com',
      password: '123',
      addresses: [
        [
          ['Hermione Granger'],
          ['5555 Diagon Alley'],
          ['Unit 9 1/2'],
          ['London'],
          ['GB'],
          ['12345'],
          ['Earth']
        ],
        [
          ['Sirius Black'],
          ['123 Azkaban'],
          ['Cell 55'],
          ['London'],
          ['GB'],
          ['48174'],
          ['Earth']
        ]
      ],
      billing: [
        [['My Card'], ['1234123412341234'], ['Harry Potter'], ['01'], ['2021']],
        [
          ['Voldemorts Card'],
          ['2345234523452345'],
          ['Tom Riddle'],
          ['04'],
          ['2020']
        ]
      ]
    }),
    User.create({
      firstname: 'Gandalf',
      lastname: 'The Grey',
      email: 'staffelf@email.com',
      password: '123',
      role: 'Alchemist',
      addresses: [
        [
          ['Bilbo'],
          ['The Bar at Miniature Lane'],
          ['Grassy Knoll'],
          ['The Shire'],
          ['ME'],
          ['85764'],
          ['Earth']
        ],
        [
          ['Éowyn'],
          ['788 Walnut Court'],
          ['Apt 2'],
          ['Romulus'],
          ['MI'],
          ['48174'],
          ['Water']
        ]
      ],
      billing: [
        [
          ['Bilbos Card'],
          ['1234123412341234'],
          ['Bilbo Baggins'],
          ['01'],
          ['2021']
        ],
        [
          ['Frodos Card'],
          ['2345234523452345'],
          ['Frodo Baggins'],
          ['04'],
          ['2020']
        ]
      ]
    }),
    User.create({
      firstname: 'Albus',
      lastname: 'Dumbledore',
      email: 'badass109@gmail.com',
      password: 'harry',
      role: 'Alchemist',
      addresses: [
        [['342 Drury Ln'], ['Magical Kingdom'], ['Ma'], ['85764'], ['Water']],
        [['788 Walnut Court'], ['Romulus'], ['MI'], ['48174'], ['Water']]
      ],
      billing: [
        [['1234123412341234'], ['Harold Potter'], ['01'], ['2021']],
        [['2345234523452345'], ['James Potter'], ['04'], ['2020']]
      ]
    }),
    User.create({
      firstname: 'Doctor',
      lastname: 'Strange',
      email: 'strangerdanger@email.com',
      password: '123',
      addresses: [
        [['342 Drury Ln'], ['Magical Kingdom'], ['Ma'], ['85764'], ['Water']],
        [['788 Walnut Court'], ['Romulus'], ['MI'], ['48174'], ['Water']]
      ],
      billing: [
        [['1234123412341234'], ['Harold Potter'], ['01'], ['2021']],
        [['2345234523452345'], ['James Potter'], ['04'], ['2020']]
      ]
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

module.exports = seedUsers
