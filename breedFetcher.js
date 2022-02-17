const arg = process.argv.slice(2);
const request = require('request');
let link = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetch = (arg) => {
  link += arg;
  request(link, (error, response, body) => {
    if (error) {
      return console.error(error);
    }

    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else console.log("error please enter valid breed");
  });

};

fetch(arg);
