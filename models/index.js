const config = require('../config/db.config')
const Seq = require('sequelize')
const seq = new Seq(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.DIALECT,
    logging: console.log
  }
)

const db = {}
db.Seq = Seq
db.seq = seq

// Models
db.user = require('./user.model')(seq, Seq)

// Relations

module.exports = db