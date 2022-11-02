const express = require ('express')
const app = express ()
const tasks = require ('./routes/tasks')
const connectDB = require ('./db/connect')
require ('dotenv').config ()
const notFound = require ('./middleware/notfound')
const errorHandlerMiddleware= require ('./middleware/error-handler')


//middleware
app.use (express.static ('./public'))
app.use (express.json())


//routes
app.use ('/api/v1/tasks', tasks)

//custom response error
app.use (notFound)
app.use (errorHandlerMiddleware) //has to be after the routes




//port
const port = process.env.PORT || 3000
//set process.env.PORT for deployment , 3000 for local.

//only if successful, then we'll spin up the server
const start = async () => {
    try {
        await connectDB (process.env.MONGO_URI)
        app.listen (port, console.log(`server is listening on port 
${port}...`))
        console.log(`connected to db`);
    } catch (error) {
        console.log(error);
    }
}

start ()

