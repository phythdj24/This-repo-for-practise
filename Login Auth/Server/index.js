import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import ConnectDB from "./DB/indexDb.js";
import loginRouter from "./routes/registerRoute.js";
const app = express()


dotenv.config();
app.use(cors())
app.use(express.json())

const PORT = 8000;
ConnectDB()

app.use('/api/v1/user', loginRouter )

app.listen(PORT, ()=>{
    console.log(`Server Running On Port:${PORT}`);
})
