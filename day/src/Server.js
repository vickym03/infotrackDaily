const express =require('express')
const cors =require('cors')

const app = express();

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });








  

  app.listen(8000, () => console.log('API is running on http://localhost:8000/login'));


app.use(cors());



