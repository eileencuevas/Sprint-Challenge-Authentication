const axios = require('axios');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const userInfo = req.body;
  userInfo.password = bcrypt.hashSync(userInfo.password);

  db('users')
    .insert(userInfo)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not register. Try again with a password and another username.' });
    });
}

function generateToken(user) {
  const payload = {
    userID: user.id,
  }

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: '60m',
  }

  return jwt.sign(payload, secret, options);
}

function login(req, res) {
  // implement user login
  const userCreds = req.body;

  db('users')
    .where({ username: userCreds.username })
    .first()
    .then(user => {
      if (!user || !bcrypt.compareSync(userCreds.password, user.password)) {
        res.status(401).json({ message: 'Invalid Username and/or Password.' });
      } else {
        const token = generateToken(user);
        res.status(200).json(token);
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not Log In. Try again later.' });
    });

}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
