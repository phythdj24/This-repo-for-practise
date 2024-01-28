import express, { Router } from "express";
import { create, deleteuser, getall, update } from "../controllers/user.controllers.js";


const route = express.Router();




route.post("/create", create)
route.get("/getall", getall)
route.put("/update/:id", update)
route.delete("/deleteuser/:id", deleteuser)

export default route;