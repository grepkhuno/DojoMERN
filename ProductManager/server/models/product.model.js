const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({

        productName :{
            type:String,
        },
        price:{
            type:Number,
        }
        ,
        description:{
            type:String,
        },
        productImg:{
            type:String
        }
},{timestamps:true})
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product 