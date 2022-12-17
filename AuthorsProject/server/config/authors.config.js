const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authordb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Authors DB")
}).catch((err)=>{
    console.log(err)
})
