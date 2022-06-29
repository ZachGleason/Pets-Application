const UserController = require('../controller/user.controller.js')

module.exports = (app) => {
    app.post('/api/user/register', UserController.registerUser)
    app.post('/api/user/login', UserController.loginUser)
    app.get('/api/user/users', UserController.getUsers)
    app.get('/api/user/:id', UserController.getUserById)
    app.put('/api/user/:id', UserController.updateUserById)
    app.delete('/api/user/:id', UserController.deleteUserById)
}