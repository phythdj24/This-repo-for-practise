import bcryptjs from "bcryptjs";
import userModel from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(500).send({
        success: false,
        msg: "Please Fill Name And Password",
      });
    }

    const userexist = await userModel.findOne({ name });
    if (userexist) {
      return res.status(500).send({
        success: false,
        msg: "User Is Already Exist",
      });
    }
    //hashing Password
    var salt = bcryptjs.genSaltSync(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    const user = await userModel.create({ name, password: hashpassword });
    res.status(201).send({
      success: true,
      msg: "User Register Succesfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Register API",
    });
  }
};
