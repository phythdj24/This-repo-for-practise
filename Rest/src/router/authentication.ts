import { login, register } from 'controllers/authentication'
import express from 'express'
import router from 'router'

export default (router: express.Router)=>{
    router.post('/auth/register', register)
    router.post('/auth/login', login)
};
