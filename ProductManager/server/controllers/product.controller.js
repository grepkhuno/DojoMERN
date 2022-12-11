const ProductM = require('../models/product.model')

module.exports = {
    getAllProducts: (req, res) => {
        ProductM.find(req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    addProduct: (req, res) => {
        ProductM.create(req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    getProductByID: (req, res) => {
        ProductM.findById(req.params.id)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    deleteAProduct: (req, res) => {
        ProductM.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    updateProductByID: (req, res) => {
        ProductM.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}