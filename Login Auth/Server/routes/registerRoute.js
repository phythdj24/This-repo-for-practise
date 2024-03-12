import express from "express";
import { registerUser } from "../controllers/registerController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const RegisterRoute = express.Router()

RegisterRoute.post('/register', registerUser)

export default RegisterRoute