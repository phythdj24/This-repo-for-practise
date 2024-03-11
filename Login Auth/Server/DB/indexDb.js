import mongoose from "mongoose";

const ConnectDB  = () => mongoose.connect("mongodb://127.0.0.1:27017/loginauth").then(()=>{
    console.log("Database Connected SuccesFully");
}).catch((err)=> console.log("Error In DB",err));

export default ConnectDB;
