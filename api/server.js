const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const url = require('url');
const queryString = require('query-string');
const express = require('express');
const app = express();

const GitHubConfig = {
  'client_id': 'f5095e6204e7bfccb7be',
  'secret': '9509f372612b4b1719bc3fdc465f06e6c2fb2107',
  'redirect_uri': '',
  'scope': 'repo',
  'state': Math.round(Math.random() * 10)
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('<p>virus!!!</p>');
});

app.get('/logingh', function(req, res) {
  var url = `https://github.com/login/oauth/authorize?client_id=${GitHubConfig.client_id}&scope=${GitHubConfig.scope}&state=${GitHubConfig.state}`;
  res.send({url});
});

app.post('/get_token', function(req, res) {
  const code = req.body.code;
  payload = {
    'code': code,
    'client_id': GitHubConfig.client_id,
    'client_secret': GitHubConfig.secret
  }
  axios.post('https://github.com/login/oauth/access_token', payload)
    .then(function(response) {
      const parsedPayload = queryString.parse(response.data);
      res.send({ token: parsedPayload.access_token });
    })
    .catch((err) => {
      res.status(400).send({ error: err.response });
    });
});

app.listen(3000, function() {
  console.log('init server');
})