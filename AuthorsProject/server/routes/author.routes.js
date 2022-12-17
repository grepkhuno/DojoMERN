const AuthorController = require('../controllers/author.controller')

module.exports = (app =>{

    app.get('/api/getAllAuthors', AuthorController.getAllAuthors),
    app.post('/api/addAuthor', AuthorController.addAuthor),
    app.get('/api/getAuthorByID/:id', AuthorController.getAuthorByID),
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor),
    app.put('/api/updateAuthorByID/:id', AuthorController.updateAuthorByID)
})