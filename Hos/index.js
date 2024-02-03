import bodyParser from 'body-parser'
import express from 'express'
import router from './src/routes/homerouter.js'
import mongoose from 'mongoose'
import authrouter from './src/routes/authRouter.js'

const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/hospital').then((response)=> {
    console.log("DataBase connceted Succefull");
}).catch((err)=> console.log(err, "Database error"))

app.use('/api/v1/user', router)
app.use('/api/v1/auth', authrouter)

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`Server Is Running On PORT: ${PORT}`);
})
