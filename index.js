const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('dotenv').config()
require('./Database/dbConnection')

const employeeServer = express()

employeeServer.use(cors())

employeeServer.use(express.json())

employeeServer.use(router)

const PORT = process.env.PORT || 3000

employeeServer.listen(PORT,()=>{
    console.log(`employeeServer is running at PORT ${PORT}`);
    
})

employeeServer.get('/',(req,res)=>{
    res.status(200).send(`<h1> Server running and waiting for client request!!</h1>`)
})