import express from "express";
import {updateUser,deleteUser,getSingleUser,getAllUser} from  "../Controllers/userController.js";
import {authenticate,restrict} from "../auth/verifyToken.js";
 const router=express.Router()
 router.get('/:id', authenticate, restrict(["patient"]), (req, res) => {
  getSingleUser(req, res); 
});
 router.get('/', authenticate, restrict(["admin"]), (req, res) => {
  getAllUser(req, res); 
});
 router.put('/:id', authenticate, restrict(["patient"]), (req, res) => {
  updateUser(req, res); 
});
 router.delete('/:id', authenticate, restrict(["patient"]), (req, res) => {
  deleteUser(req, res); 
});
export default router;
  
