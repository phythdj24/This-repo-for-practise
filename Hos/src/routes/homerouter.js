import express from 'express'
import { addUser, deletUser, getUser, getall, userUpdate } from '../controllers/userController.js';

const router = express.Router();

router.post('/adduser',addUser)
router.get('/getuser/:id',getUser)
router.get('/getall/',getall)
router.put('/updateuser/:id',userUpdate)
router.delete('/deleteuser/:id',deletUser)

export default router;