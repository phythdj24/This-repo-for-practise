import express from "express";
import { registerUser } from "../controllers/registerController.js";

const loginRouter = express.Router()

loginRouter.post('/register',registerUser)

export default loginRouter