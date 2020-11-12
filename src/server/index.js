var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const sentiment = require('./sentiment.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.listen(8080, ()=> {
  console.log('Example app listening on port 8080!')
})

app.post('/test', function (req, res) {
  const text = req.body
  console.log(text.text)
  res.send(sentiment(text.text))
})
