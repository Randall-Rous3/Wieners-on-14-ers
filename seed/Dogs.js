const mongoose = require("mongoose")
const Schema = mongoose.Schema
const db = require('../db')
const Dogs = require('../models/Dogs')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const dog = [  
        {name: 'Dot' ,breed: 'Mutt' ,date:'12/16/2021', image:'https://i.imgur.com/UbVeLVR.jpg', location: "Denver, CO." } ,
        {name: 'potato' ,breed: 'Mutt' ,date:'12/16/2021', image:'https://scontent-bos3-1.xx.fbcdn.net/v/t1.18169-9/1526409_717766148305987_5391536379066156078_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QB-PnlbchKQAX_5yOvC&_nc_ht=scontent-bos3-1.xx&oh=00_AT8jLqkwq4yZaCeyi9bb66kDtQLDpYv-DLum7DUIfhWmCw&oe=61E3C344', location: "Denver, CO."} ,
          
    ]

    await Dogs.insertMany(dog)
    console.log("Created Dogs")
}
const run = async () => {
    await main()
    db.close()
}

run()