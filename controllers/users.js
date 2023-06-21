const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login
};

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    console.log('\nthis is token', token);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // find the user in the db
    const user = await User.findOne({ email: req.body.email })
    // throw an error if they're not found
    if (!user) throw new Error()
    // if they are found compare the password using bcrypt
    const match = await bcrypt.compare(req.body.password, user.password);
    // log them in if there's a match (create the session token)
    if (match) {
      const token = createJWT(user)
      res.json(token)
    } else {
      throw new Error()
    }
    // throw an error if there is no match
  }
  catch {
    res.status(400).json('Bad Credentials')
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}