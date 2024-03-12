import express from "express";
import { loginController } from "../controllers/registerController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const loginRouter = express.Router()

loginRouter.post('/login', loginController)

export default loginRouter