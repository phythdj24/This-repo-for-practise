import express, { response }  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./routes/user.route.js";


const app = express()

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, ()=> console.log(`server is running on PORT:${PORT}`) )


mongoose.connect('mongodb://localhost:27017/new-app').then((response)=>{
    console.log("Database connected Sucesfully");
}).catch((error)=> console.log(error))


app.use("/api", route)