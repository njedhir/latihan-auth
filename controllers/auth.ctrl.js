const bcrypt = require('bcryptjs')
const db = require('../models')
const User = db.user

const register = (req, res) => {
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email
  }).then(user => {
    res.send('Registrasi sukses!')
  }).catch(err => {
    res.status(500).send({errorMessage: 'An internale server error. Please try again'})
    console.log(err.message)
  })
}

module.exports = {
  register
}