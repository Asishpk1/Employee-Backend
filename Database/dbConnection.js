const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(res=>{
    console.log("employee Server connected to MongoDb Atlas");
    
}).catch(err=>{
    console.log("Connection Failed");
    console.log(err);
    
    
})