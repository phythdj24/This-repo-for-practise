import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import ConnectDB from "./DB/indexDb.js";
import RegisterRoute from "./routes/registerRoute.js";
import loginRouter from "./routes/loginRoute.js";
const app = express()


dotenv.config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8000;
ConnectDB()

app.use('/api/v1/user', RegisterRoute )
app.use('/api/v1/user', loginRouter )

app.listen(PORT, ()=>{
    console.log(`Server Running On Port:${PORT}`);
})
