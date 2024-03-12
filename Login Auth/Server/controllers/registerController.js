import { Register } from '../models/UserSchema.js'
import bcrypt from "bcrypt"

export const registerUser = async(req,res)=>{
        
    try {
        const {name,email,password,username} = req.body
    
        if (!name || !username || !email || !password) {
            return res.status("Please Provide All Feilds",400).json({
                success:false
            })
        }

        const userExist = await Register.findOne({email})
        if (userExist) {
            return res.status(400).json({
                success:false,
                msg:"User Already Exist ! Please Login"
            })
        }

        var salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hash(password, salt)
        
         await Register.create({name,username,email,password:hashPassword})
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

export const loginController = async(req,res)=>{
          
    try {
        const {email,password} = req.body

        if (!email || !password) {
            return res.status(400).json({
                success:false,
                msg:"Please Provide All Feilds"
            })
        }

        const userExist = await Register.findOne({email})
         if (!userExist) {
            return res.status(400).json({
                success:false,
                msg:"User Not Exist"
            })
         }

         const isMatch = await bcrypt.compare(password,userExist.password)
         if (!isMatch) {
            return res.status(400).json({
                success:false,
                msg:"Password Is Incorrect"
            })
         }
         userExist.password = undefined;

         res.status(200).send({
          success: true,
          msg:'Login Succesfully',
          userExist,
          

         })


        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:true,
            msg:"Error in Login API"
        })
    }
}



// export const loginController = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({
//                 success: false,
//                 msg: "Please Provide All Fields",
//             });
//         }

//         const userExist = await Register.findOne({ email });

//         if (!userExist) {
//             return res.status(400).json({
//                 success: false,
//                 msg: "User Not Exist",
//             });
//         }

//         const isMatch = await bcrypt.compare(password, userExist.password);

//         if (!isMatch) {
//             return res.status(400).json({
//                 success: false,
//                 msg: "Password Is Incorrect",
//             });
//         }

//         // If the password is correct, remove the password field from the user object
//         userExist.password = undefined;

//         // Here, you should generate a token for authentication if you're using token-based authentication
//         // const token = generateToken(userExist);

//         res.status(200).send({
//             success: true,
//             msg: 'Login Successfully',
//             // token: token, // Include token if you're using token-based authentication
//              userExist,
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             msg: "Error in Login API",
//         });
//     }
// };
