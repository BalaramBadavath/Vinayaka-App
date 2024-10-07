const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
// const passport = require('./auth');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


// // Middleware Function
// const logRequest = (req, res, next) => {
//     console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
//     next(); // Move on to the next phase
// }
// app.use(logRequest);

// app.use(passport.initialize());
// const localAuthMiddleware = passport.authenticate('local', {session: false})

const fertilizersRoutes = require('./routers/fertilizersRoutes')

app.use('/fertilizer',fertilizersRoutes)

app.get('/', function (req, res) {
    res.send('Welcome to our application');
})
  
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})