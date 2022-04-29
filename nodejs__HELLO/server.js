const express = require("express");
const bodyParser = require("body-parser");

//create a express app
const app = express();

// run on port
const port = 5000;

//
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("<h1> <i>Good Afternoon! </i></h1>");
});


//database
const dataBase = require('./config/Database.config')
const connectMongoose = require('mongoose')

connectMongoose.Promise = global.Promise

//connect to database
connectMongoose.connect(dataBase.url,{
    useNewUrlParser: true
}).then(()=>{
    console.log("connected to DataBase...")
}).catch((err)=>{
    console.log("connecting FAILED", err)
process.exit();
})













require('./routes/Routes')(app)



app.listen(port, () => {
  console.log(`Running - http://localhost:${port}`);
});
