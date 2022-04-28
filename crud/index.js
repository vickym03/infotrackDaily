import express from "express";
import bodyParser from "body-Parser" //  allows express to read the body and then parse that into a Json object that we can understand





//app.use(bodyParser.json)


//nav to ui
// app.get('/', (req,res)=>{
//     console.log("running!")
// res.send("hello for home")

// })




var app = express();
var PORT =  8000;

 app.listen(PORT, function() {
      console.log(`server is running : http://localhost:${PORT}`)
});