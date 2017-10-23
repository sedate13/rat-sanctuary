const express = require('express');
const bodyParser = require('body-parser');
const axios = require ('axios');

const port = 3000;
const app = express();
const cors = require('cors');

 
app.use(cors());
app.use( bodyParser.json() );

app.use("/", express.static(`${__dirname}/public/build`));


// app.get('/api/dogs/', (req, res, next)=> {
//    res.json('succesful connection');
//   axios.get('https://dog.ceo/api/breed/chihuahua/images/random').then(response => {
//  return res.send(response.data.message);
// }).catch(console.log);
// });

app.get('/api/dogs', (req, res, next) => {
  axios.get('https://dog.ceo/api/breed/chihuahua/images/random').then(response => {
      res.json(response.data);
  }).catch(console.log);
});


// app.get('https://dog.ceo/api/breeds/image/random', (req, res)=> {
//   console.log('server')
//   axios.get('https://dog.ceo/api/breeds/image/random').then(response=>{
//     return res.send(response.data)
//   }).catch(console.log("it broke)"))
// })










app.listen( port, () => { console.log(`Somebody is listening on port ${port}`); } );