const mongoose = require("mongoose")
const express = require("express")
const app = express()


const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

//DB
mongoose.connect(process.env.DBLOCAL,{
}).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log("Unable to connect to DB "  + err)
})

//Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Importing routes
const userRoutes = require("./routes/user")
const profileRoutes = require("./routes/profile")
// const examRoutes = require("./routes/exam")
// const questionRoutes = require( "./routes/question" )

//Using routes
app.use('/api/auth', userRoutes)
app.use('/api/profile', profileRoutes)
// app.use('/api/exam' , examRoutes )
// app.use('/api/question' , questionRoutes)


const port = process.env.PORT || 8000

//Starting a server
app.listen(port,()=>{
    console.log(`App is running at ${port}`)
})
