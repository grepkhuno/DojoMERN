const JokesController = require("../controllers/jokes.controllers")

module.exports=(app)=>{
    app.get('/api/getAllJokes', JokesController.getAllJokes),
    app.post('/api/addJoke', JokesController.addJoke),
    app.get('/api/getJokeById/:id', JokesController.getJokeById),
    app.delete('/api/deleteAJoke/:id', JokesController.deleteAJoke),
    app.put('/api/putJoke/:id', JokesController.putJoke)

}