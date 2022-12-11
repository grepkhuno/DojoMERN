const ProductController = require('../controllers/product.controller')

module.exports = (app =>{

    app.get('/api/getAllProducts', ProductController.getAllProducts),
    app.post('/api/addProduct', ProductController.addProduct),
    app.get('/api/getProductByID/:id', ProductController.getProductByID),
    app.delete('/api/deleteAProduct/:id', ProductController.deleteAProduct),
    app.put('/api/updateProductByID/:id', ProductController.updateProductByID)
})