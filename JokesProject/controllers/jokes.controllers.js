const JokeM = require("../models/jokes.model")


const addJoke = (req, res) => {
    const { body } = req
    JokeM.create(body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
}

const getAllJokes = async (req, res) => {

    JokeM.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)

        })

}
const getJokeById = async (req, res) => {
    JokeM.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)

        })
}

const deleteAJoke = async (req, res) => {
    JokeM.deleteOne({id:req.params.id}, req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)

    })
}

const putJoke = async (req, res) => {

    JokeM.updateOne({_id:req.params.id},{punchLine: req.body.punchLine})
        

    .then((updateJoke) => {
        res.json(updateJoke)
    }).catch((err) => {
        console.log(err)

    })
}

module.exports = {
    addJoke, getAllJokes, deleteAJoke, putJoke, getJokeById
}