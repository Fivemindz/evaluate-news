const dotenv = require('dotenv');
dotenv.config();

var https = require('follow-redirects').https;
var fs = require('fs');

function getData(text) {
  const options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}&model=general`,
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
      console.log(body.toString());
      return body;
    });
    res.on("error", function (error){
      console.log(error);
    });
  });
server_req.end();
};

module.exports = getData