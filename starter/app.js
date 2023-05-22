
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectdb=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/notfound')
const errorhandler=require('./middleware/errorhandler')


//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/api/v1/tasks',tasks)

app.use(notFound)

const port=process.env.PORT

const start=async ()=>{
    try{
        await connectdb(process.env.mongo_uri)
        app.listen(port,console.log(`server on on port ${port}`))

    }catch(err){

    }
}

start()



