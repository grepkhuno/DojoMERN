const mongoose = require ("mongoose")


mongoose.connect('mongodb://localhost:/jokesApidb', () => {
       console.log("*Connected to MongoDB")
})