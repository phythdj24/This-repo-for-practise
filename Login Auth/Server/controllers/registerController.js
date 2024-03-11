import { Register } from '../models/UserSchema.js'

export const registerUser = async(req,res)=>{
        
    try {
        const {name,email,password,username} = req.body
    
        if (!name || !username || !email || !password) {
            return res.status("Please Provide All Feilds",400).json({
                success:false
            })
        }
        
         await Register.create()
         res.status(200,).json({
            success:true,
            msg:"User Registerd Successfull"
         })
    
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:true,
            msg:"Error in Register API"
        })
    }
}