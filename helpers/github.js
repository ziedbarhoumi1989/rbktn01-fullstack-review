const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  return new Promise(function (resolve, reject) {

    request(options, function (error, response, body) {
      if (error) {
        console.log('error:', error);
      }
      else {
        resolve(JSON.parse(body)
      }


    }

    //response.send('the term is passed')
  })
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  var options = {
    url: `https://api.github.com/users/${term}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}

module.exports.getReposByUsername = getReposByUsername;