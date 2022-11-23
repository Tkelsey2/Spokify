const Songs = require('../models')
const db = require('./db')


async function seed(){
    await db.sync({force: true})

    await Songs.bulkCreate([













    ])


}


module.exports = seed