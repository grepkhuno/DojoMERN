const express = require('express')
const Routes = require('./routes/product.routes')
const cors = require('cors')
const app = express()
const PORT = 8000
require('./config/mongoose.config')

/////////////////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log('Server is up and running on port${PORT}')
})
/////////////////////////////////////////////////////////////
app.use(express.json())
app.use(express.urlencoded({extended:true}))
/////////////////////////////////////////////////////////////
app.use(cors({
    origin: 'http://localhost:3000',
}))
/////////////////////////////////////////////////////////////

Routes(app)