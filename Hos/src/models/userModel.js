import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
          name:{
            type: String,
            required: true
          },
          password:{
               type: String,
               required: true,
          },
          disease:{
            type: String,
            required: true
          },
          doctorname:{
            type: String,
            required: true
          },
          address:{
            type: String,
            required: true
          },
},  {timestamps: true})

export default mongoose.model("User", UserSchema)