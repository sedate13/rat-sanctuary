const express = require('express');
const bodyParser = require('body-parser');
const axios = require ('axios');
const port = 3000;
const app = express();
const cors = require('cors');

 
app.use(cors());
app.use( bodyParser.json() );
app.use("/", express.static(`${__dirname}/public/build`));

app.get('/api/dogs', (req, res, next) => {
  axios.get('https://dog.ceo/api/breed/chihuahua/images/random').then(response => {
      res.json(response.data);
  }).catch(console.log);
});




app.listen( port, () => { console.log(`Somebody is listening on port ${port}`); } );