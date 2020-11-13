var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const sentiment = require('./sentiment.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

var https = require('follow-redirects').https;
var fs = require('fs');

const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.listen(8081, () => {
  console.log('Example app listening on port 8081!')
})

app.post('/test', async (req, res) => {
  const text = req.body.text
  try{
    let data = sentiment(text)
    res.json(data)
  } catch(error){
    let message = "Analysis failed!"
    res.send(message)
  }
})
