import express, { Router } from "express";
import { create, getall } from "../controllers/user.controllers.js";


const route = express.Router();


route.post("/create", create)
route.get("/getall", getall)

export default route;