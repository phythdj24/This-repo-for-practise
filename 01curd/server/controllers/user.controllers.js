import User from "../models/user.model.js";


export const create = async(req, res)=>{

    try {
        
        const userData = new User(req.body);
        if (!userData) {
            res.status(404).json({msg: "Data Not Found"})
        }

        const savedData = await userData.save();
        res.status(200).json(savedData)


    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const getall = async(req,res)=>{
         try {
            const userData = await User.find()

            if (!userData) {
                res.status(404).json({msg: "User dose not found" })
            }
            res.status(200).json(userData)

         } catch (error) {
            res.status(500).json({error: error})
         }
}

export const getoneUser = async(req,res)=>{
   
    try {

        const id = req.params.id;
        const userExist = await User.findById(id) 

        const user = User.findById(id)

        if (!userExist) {
            return res.status(404).json({msg: "User Not Found"})
        }

        res.status(200).json(userExist)
       
        
    } catch (error) {
        res.status(500).json({error: error})
    }


}

export const update =  async(req,res)=>{
          try {

            const id = req.params.id;

            const userExist = await User.findById(id)

            if (!userExist) {
                res.status(404).json({msg: "User Dose Not Exist"})
            }

           const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true})
           res.status(200).json(updateUser)
            
          } catch (error) {
            res.status(500).json({error: error})
          }
}

export const deleteuser = async(req,res)=>{
        
   try {
     const id = req.params.id;
 
             const userExist = await User.findById(id)
 
             if (!userExist) {
                 res.status(404).json({msg: "User Dose Not Exist"})
             }
 
            await User.findByIdAndDelete(id)
             res.status(200).json({msg: "User deleted succesfuly"})
   } catch (error) {
    res.status(500).json({error: error})
   }



}