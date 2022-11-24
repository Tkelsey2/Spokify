const Songs = require('../models')
const db = require('./db')


async function seed(){
    await db.sync({force: true})

    await Songs.bulkCreate([

        {
            title: 'Lithium',
            artist: 'Nirvana',
            rating: 4
        }, 
        {
            title: 'Mans not hot',
            artist: 'Big Shaq',
            rating: 5
        },
        {
            title: 'CBAT',
            artist: 'Hudson Mohawke',
            rating: 1
        },
        {
            title: 'The pretender',
            artist: 'Foo Fighters',
            rating: 5
        }

    ])


}


module.exports = seed