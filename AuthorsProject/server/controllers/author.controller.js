const AuthorM = require('../models/author.model')

module.exports = {
    getAllAuthors: (req, res) => {
        AuthorM.find(req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    addAuthor: (req, res) => {
        AuthorM.create(req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    getAuthorByID: (req, res) => {
        AuthorM.findById(req.params.id)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    deleteAuthor: (req, res) => {
        AuthorM.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ err });

            })
    },
    //
    updateAuthorByID: (req, res) => {
        AuthorM.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}