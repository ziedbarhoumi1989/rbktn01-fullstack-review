const express = require('express');
var bodyParser = require('body-parser')

let getReposByUsername = require('../helpers/github.js')
let app = express();
const db = require('../database/index.js').save;
a()
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.post('/repos', function (req, res) {
  // TODO - your code here!
  var username = req.body.term;
  db.collection.find(username)

}
}
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  res.send(getReposByUsername.getReposByUsername(req.body.username))
  //res.send("heel")
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

