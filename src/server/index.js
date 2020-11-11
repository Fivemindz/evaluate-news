var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

app.get('/test', function(req, res) {
  res.send(mockAPIResponse)
})

module.exports = app;