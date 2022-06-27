const PetsController = require('../controllers/pet.controller.js')

module.exports = (app) => {
    app.post('/api/user/create', PetsController.createUser)
    app.get('/api/user/users', PetsController.getUsers)
    app.get('/api/user/:id', PetsController.getUserById)
    app.put('/api/user/:id', PetsController.updateUserById)
    app.delete('/api/user/:id', PetsController.deleteUserById)
}