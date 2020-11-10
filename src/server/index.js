const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const https = require('follow-redirects').https;
const fs = require('fs');


const app = express()
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, resp) {
  const options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=Test!&model=general`,
    'headers': {
    },
    'maxRedirects': 20
  };
  
  const server_req = https.request(options, function (res){
    let chuncks = [];

    res.on("data", function (chunk){
      chuncks.push(chunk);
    });

    res.on("end", function (chunk){
      let body = Buffer.concat(chuncks);
      resp.json(body.toString());
      console.log(body.toString());
    });
    res.on("error", function (error){
      console.log(error);
    });
  });
server_req.end();

});
