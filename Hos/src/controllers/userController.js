import userModel from "../models/userModel.js"

export const addUser = async (req,res)=>{
       try {

        const {name , doctorname , address ,disease} = req.body;

         if (!name || !doctorname || !address || !disease) {
              return res.status(400).send({
                success: false,
                msg: "Please Fill All Feilds"
              })
         }

         const userexist = await userModel.findOne({name})

         if (userexist) {
              return res.status(500).send({
                success: false,
                msg: "User already exist"
              })
         }

         const user = await userModel.create({name, doctorname,address , disease})
            return res.status(200).send({
                success: true,
                msg: "User Createtd Successfully",
                user,
            })

        
       } catch (error) {
            res.status(500).send({
                success: false,
                msg: "error in AddUser API"
            })
       }
}


export const getUser = async(req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await userModel.findById(id) 

        if (!userExist) {
            return res.status(404).json({msg: "User Not Found"})
        }

        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const getall = async(req, res)=>{
           try {
              const userdata = await userModel.find()
             
              if (!userdata) {
                 res.status(404).send({
                    success:false,
                    msg:"Users Not Found"
                 })
              }
              res.status(200).json(userdata)

           } catch (error) {
            res.status(500).json({error: error})
           }
}

export const userUpdate = async(req,res)=>{
          try {
              const id = req.params.id;
              
              const userexist = await userModel.findById(id);
              if (!userexist) {
                 return res.status(404).send({
                    success: false,
                    msg:"User Not Found"
                 })
              }

              const updateuser = await userModel.findByIdAndUpdate(id, req.body , {new: true})
            res.status(201).json(updateuser)

          } catch (error) {
            res.status(500).json({error: error})
          }
}

export const deletUser = async(req,res) =>{
           try {
               
            const id = req.params.id;
            const userexist = await userModel.findById(id)

            if (!userexist) {
                return res.status(404).send({
                    success: false,
                    msg:"User Not Found"
                 })
            }
              await userModel.findByIdAndDelete(id)
              res.status(200).json({msg:"User deleted succesfully"})

           } catch (error) {
            res.status(500).json({error: error})

           }
}
