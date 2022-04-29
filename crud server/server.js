const express = require('express');

var cors = require('cors');



// Configuring the database
const dbConfig = require('./config/Database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// create express app
const app = express();


// parse application/json
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

//cors to connent react used of auth block from 
app.use(cors())

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome "});
});

require('./routes/Routes.js')(app);

// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});