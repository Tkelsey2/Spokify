const Songs = require('../models')
const db = require('./db')


async function seed(){
    await db.sync({force: true})

    await Songs.bulkCreate([

        {
            title: 'Lithium',
            artist: 'Nirvana',
            rating: 4,
            album: 'Nevermind',
            img: ''
        }, 
        {
            title: 'Mans not hot',
            artist: 'Big Shaq',
            rating: 5,
            album:'Mans not hot (the remixes)',
            img:''
        },
        {
            title: 'CBAT',
            artist: 'Hudson Mohawke',
            rating: 1,
            album: 'Satin Panthers'
        },
        {
            title: 'The pretender',
            artist: 'Foo Fighters',
            rating: 5,
            album:'Echoes,Silence,Patience & Grace',
            img: ''
        }

    ])


}


module.exports = seed