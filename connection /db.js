const mongoose = require('mongoose')
require('dotenv').config()

//the dotenv pavkage is used to hide varibles when uploading the code

//writing a function to connect to connect to the database
async function connectDB () {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //to avoid errors
        })
        console.log('connection has been made')
    } catch(err) {
        console.log(err,'could not connect')
        process.exit(1)
    }
}

module.exports = connectDB