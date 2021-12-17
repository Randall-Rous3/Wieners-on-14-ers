const mongoose = require("mongoose")
const Schema = mongoose.Schema
const db = require('../db')
const Dogs = require('../models/Dogs')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const dog = [  
        {name: 'Dot' ,breed: 'Mutt' ,date:'12/16/2021'} ,
        {name: 'potato' ,breed: 'Mutt' ,date:'12/16/2021'} ,
          
    ]

    await Dogs.insertMany(dog)
    console.log("Created Dogs")
}
const run = async () => {
    await main()
    db.close()
}

run()