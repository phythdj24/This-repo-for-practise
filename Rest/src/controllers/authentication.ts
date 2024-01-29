import express from "express";
import { createUser, getUserByEmail } from '../db/users';
import { authentication, random } from "helpers";

export const login = async(req: express.Request, res: express.Response) => {
     

    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400);
        }
        
    } catch (
        
    ) {
        
    }
}

export const register = async(req: express.Request, res: express.Response){
    try {

        const {email, password, username} = req.body;

        if (!email || !password || !username) {
            return res.sendStatus(400)

        }
      
        const UserExist = await getUserByEmail(email)

        if (UserExist) {
            return res.sendStatus(400)
        }

        const salt = random()
        const user = await createUser({
            email,
            username,
            authentication:{
                salt,
                password: authentication(salt, password)
            }
        })

        return res.status(200).json(user).end();
 

        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)

        
    }
}