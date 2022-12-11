const express = require('express')
const app = express()
const PORT = 8000

require("../server/config/mongoose")

app.use(express.json()), express.urlencoded({extended: true})

