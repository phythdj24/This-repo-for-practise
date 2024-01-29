import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log(`server Running On http://localhost:8080/ `);
});

const MONGO_URL =
  "mongodb+srv://sangamdalal24:sangam24@cluster0.lhpjvri.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then((response)=> {console.log("mongoose Succesfully Connected")
} ).catch((err)=> console.log(err)
)
mongoose.connection.on(`error`, (error: Error) => console.log(error));
