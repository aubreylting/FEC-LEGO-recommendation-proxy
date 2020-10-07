const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port= 5000;
const axios = require('axios');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/:pid/getGalleries', (req, res) =>{
  axios.get('http://localhost:1420/1/getGalleries')
    .then(body => {
      res.status(200).send(body.data);
    })
    .catch(err =>{
      res.status(404).send(err);
    })
});

app.get('/:pid/product-details/', (req, res) =>{
  axios.get('http://localhost:8080/1/product-details')
    .then(body => {
      res.status(200).send(body.data);
    })
    .catch(err =>{
      res.status(404).send(err);
    })
});

app.get('/:pid/reviews', (req, res) =>{
  axios.get('http://localhost:3000/1/reviews')
    .then(body => {
    res.status(200).send(body.data);
    })
    .catch(err =>{
      res.status(404).send(err);
    })
});

app.get('/:pid/recommendation/getInfo', (req, res) =>{
  axios.get('http://localhost:1234/1/recommendation/getInfo')
    .then(body => {
    res.status(200).send(body.data);
    })
    .catch(err =>{
      res.status(404).send(err);
    })
});

app.listen(port, () => {
  console.log(`server running at : http://localhost:${port}`);
});
