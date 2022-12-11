const Controller = require('../controllers/animals.controller')

module.exports = app => {
    app.post('/api/obj', Controller.create)
}