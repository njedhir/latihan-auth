const { authCtrl } = require('../controllers')

module.exports = app => {
  app.post('/auth/register', authCtrl.register)
}