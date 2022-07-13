const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path')

//connect to the database using an import function
const connectDB = require('./connection/db');

//initializing the database function
connectDB()

//adding the path for static files like css,javascript and images
app.use(express.static(path.join(__dirname,'public')))

//adding the path for the html 
app.set('views', path.join(__dirname, 'views'))

//initializing thr view engine
app.set('view engine','ejs');

//connect to the router using import function
app.use('/', require('./routes/index'))


app.listen(PORT , () => { 
  console.log('port started');
})