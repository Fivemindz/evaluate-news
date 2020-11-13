const dotenv = require('dotenv');
dotenv.config();

const fetch = require('node-fetch');
 
async function getData(text) {
  url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}&mode=general`;
  const response = await fetch(url);
  try {
    const newData = await response.json();
    return newData;
  } catch(error) {
    console.log("error", error);
  }
};

module.exports.getData = getData;
