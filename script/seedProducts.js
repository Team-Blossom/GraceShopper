const {Product, Category} = require('../server/db/models/index')

const createCategories = async () => {
  try {
    const emotes = await Category.create({
      name: 'Emotions'
    })
    const elixirs = await Category.create({
      name: 'Elixirs'
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
        'https://sites.create-cdn.net/siteimages/29/1/0/291047/49/0/6/4906805/381x400.jpg',
        'https://i.pinimg.com/originals/22/54/5a/22545a718c0a5944c8f65b5a50009eb7.jpg'
      ],
      rating: 5
    })
    const anger = await Product.create({
      name: 'indignitas',
      price: 100,
      description: 'I like this one. Anger gets stuff done.',
      pictures: [
        'https://www.lemonde.fr/blog/alternatives/wp-content/uploads/sites/28/2012/06/salt_anger_large.jpeg',
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://i.pinimg.com/originals/22/54/5a/22545a718c0a5944c8f65b5a50009eb7.jpg'
      ],
      rating: 5
    })
    const sadness = await Product.create({
      name: 'tristitia',
      price: 100,
      description:
        'People who cause happiness are always kept close. This will lighten the mood and lift your effect for hours.',
      pictures: [
        'https://i.pinimg.com/originals/14/86/fd/1486fdbeb02537c958c75265ac298aa8.png',
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://i.pinimg.com/originals/22/54/5a/22545a718c0a5944c8f65b5a50009eb7.jpg'
      ],
      rating: 5
    })
    const fear = await Product.create({
      name: 'timor',
      price: 100,
      description:
        'They will be halted by the darkest of visions. And their source shall be own fears.',
      pictures: [
        'https://i.ebayimg.com/images/g/pHgAAOSwrvtd7pEu/s-l400.jpg',
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://i.pinimg.com/originals/22/54/5a/22545a718c0a5944c8f65b5a50009eb7.jpg'
      ],
      rating: 5
    })
    const calm = await Product.create({
      name: 'cessabit',
      price: 100,
      description: 'Dude. chill. out.',
      pictures: [
        'https://cdn5.vectorstock.com/i/1000x1000/56/69/keep-calm-and-brew-a-potion-vector-23115669.jpg',
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://i.pinimg.com/originals/22/54/5a/22545a718c0a5944c8f65b5a50009eb7.jpg'
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
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTt6g4CFu3t3RKafnyEqrEar2A4SfN6KUC1g&usqp=CAU',
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
          'https://ssouls.wdfiles.com/local--files/battle-boosts:overview/Mana_Vial.png',
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
          'https://media1.tenor.com/images/6417a2d0ee9ef5a190563b6694fbfa3e/tenor.gif?itemid=5025459',
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
          'https://media.istockphoto.com/vectors/bottle-with-magic-calming-potion-black-and-white-vector-graphic-vector-id1167370676',
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
          'https://media1.tenor.com/images/0ead6c0c76f93019d76bd1ec6a6d7636/tenor.gif?itemid=12587546',
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
          'https://cnet1.cbsistatic.com/img/sgyIXao68UwIsieNEt7fuSkOAsc=/940x0/2015/04/24/370160b3-857f-4248-9819-dc36c468c281/avengers254d1158022f16.jpg',
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      })
    ]).then(elixProds => {
      // console.log(elixProds)
      elixProds.forEach(prod => {
        prod.setCategory(cat[1])
        cat[1].addProduct(prod)
      })
    })

    //FOR RELICS - BULKCREATE METHOD
    Promise.all(
      [
        Product.create({
          name: 'Fallen Feather',
          price: 1000,
          description:
            'Revitalize your fellow and extend their heath triple-fold. Three uses only.',
          pictures: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVA0s7OSB3mt3uAeEhTsUyawZUoAmfDcI1TQ&usqp=CAU',
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        }),
        Product.create({
          name: 'Morgana Charm',
          price: 700,
          description:
            'Anyone of ill-intent will be reveiled. Side Effect: It is an energy sucker, yet worth it.',
          pictures: [
            'https://vignette.wikia.nocookie.net/merlin1/images/1/16/408-Evangeline.jpg/revision/latest?cb=20111105150717',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0fcf8212-c75a-456d-bba1-a42a8b525011/dbfotoi-ab362dfe-c55e-43d4-9686-64c072d624e1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGZjZjgyMTItYzc1YS00NTZkLWJiYTEtYTQyYThiNTI1MDExXC9kYmZvdG9pLWFiMzYyZGZlLWM1NWUtNDNkNC05Njg2LTY0YzA3MmQ2MjRlMS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.S2hJXazwTFqx_JKvA6bnukLv9IE8zu1SZL3jOT3fIZo',
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        }),
        Product.create({
          name: "Dragon's Tail",
          price: 900,
          description: 'Fire Everywhere.',
          pictures: [
            'https://i.pinimg.com/originals/df/a9/11/dfa911c404e8c75a8dbb6b9a8e7939bc.jpg',
            // "https://i.pinimg.com/originals/16/a4/7e/16a47e6551a82991beb191cd1d0b8b5e.jpg",
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        }),
        Product.create({
          name: 'Glove Of Truth',
          price: 1150,
          description:
            'Worthy of the kings of old. There are only a limited amount that exist on this plane. Anyone within your grasp will tell only the truth.',
          pictures: [
            'https://i.pinimg.com/originals/4f/0d/80/4f0d80de9ecc425b35e2810eb773fbe3.jpg',
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        }),
        Product.create({
          name: 'Odyssey Cloak',
          price: 950,
          description:
            'An Impeccable disguise. Once activated, it will be worn for three weeks.',
          pictures: [
            'https://miro.medium.com/max/1100/0*g_K0AgLC65T-9Fyp.jpg',
            'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
          ],
          rating: 5
        })
      ]
      // ,
      // options
    ).then(allRelicProds => {
      allRelicProds.forEach(prod => {
        prod.setCategory(cat[2])
        cat[2].addProduct(prod)
      })
    })

    // cat[3].addProducts(allRelicProds)
    // allRelicProds.forEach(prod => {
    //   prod.setCategory(cat[3])
    //   // cat[3].addProduct(prod)
    // })

    //FOR CONDUITS - PROMISE ALL/THEN METHOD
    Promise.all([
      Product.create({
        name: 'Enchanted Dagger',
        price: 500,
        description: 'Your Intention shall reach them.',
        pictures: [
          'https://png.pngtree.com/png-vector/20200227/ourlarge/pngtree-hand-holding-a-knife-and-potionhand-holding-a-knife-and-potion-png-image_2154320.jpg',
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
          'https://vignette.wikia.nocookie.net/amsnorth/images/d/dc/Staff.jpg/revision/latest/scale-to-width-down/340?cb=20141023093755',
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
          'https://img.wonderhowto.com/img/78/99/63492905753884/0/make-chain-mail-armor-from-start-finish.1280x600.jpg',
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
          'https://i.etsystatic.com/10761486/r/il/658f78/1509297506/il_794xN.1509297506_3qjh.jpg',
          'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
        ],
        rating: 5
      }),
      Product.create({
        name: 'Fire Fingers',
        price: 900,
        description: 'Your application will be deployed before you know it.',
        pictures: [
          'https://media1.tenor.com/images/67562516aca5eae6cc4c62db91e63a71/tenor.gif?itemid=7824949',
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
        'https://i.pinimg.com/originals/9f/60/07/9f600749626d3480769f35ee386177bd.gif',
        'https://img5.goodfon.com/wallpaper/nbig/5/1e/book-dark-magic-kniga-magiia-tiomnaia-magiia-runy.jpg',
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
        'https://bookstr.com/wp-content/uploads/2018/08/evil-books.jpg',
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
        'https://previews.123rf.com/images/tolokonov/tolokonov1208/tolokonov120800058/14889415-fairy-tales-from-magic-book-abstract-fantasy-backgrounds-with-beauty-bokeh.jpg',
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
        'https://images.pond5.com/endless-flipping-pages-magic-book-footage-126286851_iconl.jpeg',
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
        'https://i.pinimg.com/originals/40/fc/65/40fc65faa2798e1294a93f17d9a7ba39.jpg',
        'https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/06/mervyn-chan-RFXxBTHze_M-unsplash.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png'
      ],
      rating: 5
    })

    await cat[4].addProducts([mySoul, darkness, fairy, golden, slate])
    await mySoul.setCategory(cat[4])
    await darkness.setCategory(cat[4])
    await fairy.setCategory(cat[4])
    await golden.setCategory(cat[4])
    await slate.setCategory(cat[4])

    // cat[0].addProducts([calm, happiness, sadness, anger, fear])
    // calm.setCategory(cat[0])
    // happiness.setCategory(cat[0])
    // sadness.setCategory(cat[0])
    // anger.setCategory(cat[0])
    // fear.setCategory(cat[0])
  } catch (error) {
    console.log('ERROR IN THE PRODUCTS CREATION FUNC', error)
  }
}

module.exports = {
  createProds
}
