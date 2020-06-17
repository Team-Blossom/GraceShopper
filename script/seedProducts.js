const {Product, Category} = require('../server/db/models/index')

const createCategories = async () => {
  try {
    const elixirs = await Category.create({
      name: 'Elixirs'
    })
    const emotes = await Category.create({
      name: 'Emotions'
    })
    const relics = await Category.create({
      name: 'Relics'
    })
    const conduits = await Category.create({
      name: 'Conduits'
    })
    const literature = await Category.create({
      name: 'Literature'
    })

    console.log('CATEGORIES MADE')
    return [emotes, elixirs, relics, conduits, literature]
  } catch (error) {
    console.log('ERROR IN THE CATEGORIES CREATION FUNC', error)
  }
}

const createProds = async () => {
  try {
    //CREATING CATEGORIES
    let cat = await createCategories()
    // console.log(cat)

    //CREATING PRODUCTS

    //FOR EMOTES - VARIABLE METHOD
    const happiness = await Product.create({
      name: 'felix',
      price: 100,
      description:
        'People who cause happiness are always kept close. This will lighten the mood and lift your effect for hours.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const anger = await Product.create({
      name: 'indignitas',
      price: 100,
      description: 'I like this one. Anger gets stuff done.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const sadness = await Product.create({
      name: 'tristitia',
      price: 100,
      description:
        'People who cause happiness are always kept close. This will lighten the mood and lift your effect for hours.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const fear = await Product.create({
      name: 'timor',
      price: 100,
      description:
        'They will be halted by the darkest of visions. And their source shall be own fears.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const calm = await Product.create({
      name: 'cessabit',
      price: 100,
      description: 'Dude. chill. out.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })

    cat[0].addProducts([calm, happiness, sadness, anger, fear])
    calm.setCategory(cat[0])
    happiness.setCategory(cat[0])
    sadness.setCategory(cat[0])
    anger.setCategory(cat[0])
    fear.setCategory(cat[0])

    //FOR ELIXIRS -PROMISE ALL/THEN METHOD
    Promise.all([
      Product.create({
        name: 'Sinergy',
        price: 100,
        description: 'Get a serene boost. Duration: 1 hour.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Soul-centered',
        price: 100,
        description: 'Personal Maximum Mana Boost provided. Duration: 2 hours.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Heightened Strength',
        price: 100,
        description:
          'Personal-StrengthX3. Drink responsibly. Power up for 3 hours.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Altera Vita',
        price: 100,
        description:
          'Feels like gaining an additonal heart in one of those games.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Speed',
        price: 100,
        description:
          'Clean your entire house quickly. Possible side-effects: heightened awareness/senses during use, temporary daze after use.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Sheild',
        price: 100,
        description: 'Temporary Invicibility. 5 minutes.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      })
    ]).then(elixProds => {
      // console.log(elixProds)
      elixProds.forEach(prod => {
        prod.setCategory(cat[1])
        cat[0].addProduct(prod)
      })
    })

    //FOR RELICS - BULKCREATE METHOD
    const allRelicProds = await Product.bulkCreate(
      [
        {
          name: 'Fallen Feather',
          price: 1000,
          description:
            'Revitalize your fellow and extend their heath triple-fold. Three uses only.',
          pictures: [
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        },
        {
          name: 'Morgana Charm',
          price: 700,
          description:
            'Anyone of ill-intent will be reveiled. Side Effect: It is an energy sucker, yet worth it.',
          pictures: [
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        },
        {
          name: "Dragon's Tail",
          price: 900,
          description: 'Fire Everywhere.',
          pictures: [
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        },
        {
          name: 'Glove Of Truth',
          price: 1150,
          description:
            'Worthy of the kings of old. There are only a limited amount that exist on this plane. Anyone within your grasp will tell only the truth.',
          pictures: [
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        },
        {
          name: 'Odyssey Cloak',
          price: 950,
          description:
            'An Impeccable disguise. Once activated, it will be worn for three weeks.',
          pictures: [
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        }
      ]
      // ,
      // options
    )

    cat[3].addProducts(allRelicProds)
    allRelicProds.forEach(prod => {
      prod.setCategory(cat[3])
      // cat[3].addProduct(prod)
    })

    //FOR CONDUITS - PROMISE ALL/THEN METHOD
    Promise.all([
      Product.create({
        name: 'Enchanted Dagger',
        price: 500,
        description: 'Your Intention shall reach them.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Water Rock Staff',
        price: 500,
        description: 'Perfect for a valued Healer',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Grunt Steal',
        price: 100,
        description:
          'Formulate it into anything needing general protection. Perffect for helmets, sheilds and armor plating.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Patria Pouch',
        price: 700,
        description:
          'Carry the soil of your homeland in this pouch and you shall walk with the strength of your lineage.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Speed',
        price: 100,
        description:
          'Clean your entire house quickly. Possible side-effects: heightened awareness/senses during use, temporary daze after use.',
        pictures: [
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      })
    ]).then(conduitProds => {
      // console.log(conduitProds)
      conduitProds.forEach(prod => {
        prod.setCategory(cat[3])
        cat[3].addProduct(prod)
      })
    })
    //FOR LITERATURE - VARIABLE METHOD
    const mySoul = await Product.create({
      name: 'anima mea',
      price: 5000,
      description:
        'Only the pure can read it. Only the strongest can weild its secrets.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const darkness = await Product.create({
      name: 'The Dark One',
      price: 100,
      description:
        'Study versions generally sold. Weilding versions only available to those with security access granted by the the order.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const fairy = await Product.create({
      name: 'Fairy Magic',
      price: 100,
      description: 'Beat them with Kindness everytime.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const golden = await Product.create({
      name: 'Golden Point',
      price: 100,
      description: 'Spells of the Forest Elves.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })
    const slate = await Product.create({
      name: 'The Slate',
      price: 100,
      description:
        'For our writers, independent studies and creative types. Find your own path.',
      pictures: [
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })

    cat[4].addProducts([mySoul, darkness, fairy, golden, slate])
    mySoul.setCategory(cat[4])
    darkness.setCategory(cat[4])
    fairy.setCategory(cat[4])
    golden.setCategory(cat[4])
    slate.setCategory(cat[4])
  } catch (error) {
    console.log('ERROR IN THE PRODUCTS CREATION FUNC', error)
  }
}

module.exports = {
  createProds
}
