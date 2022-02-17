const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const link = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(link, (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("error please enter valid breed", null);
    }
  });

};

module.exports = { fetchBreedDescription };