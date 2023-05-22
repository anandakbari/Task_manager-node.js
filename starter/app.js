
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectdb=require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes


app.use('/api/v1/tasks',tasks)

const port=3000

const start=async ()=>{
    try{
        await connectdb(process.env.mongo_uri)
        app.listen(port,console.log(`server on on port ${port}`))

    }catch(err){

    }
}

start()



