import express from 'express'
import { registerUser } from '../controllers/authController.js'
import validate from '../middlewares/validate-middleware.js'
import signUpSchema from '../validators/auth.validtor.js'

const router = express.Router()

router.post('/register', registerUser, validate(signUpSchema))

export default router