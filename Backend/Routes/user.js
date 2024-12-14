import express from "express";
import {updateUser,deleteUser,getSingleUser,getAllUser,getUserProfile,getMyAppointments} from  "../Controllers/userController.js";
import {authenticate,restrict} from "../Auth/verifyTokens.js";
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
router.get('/profile/me', authenticate, restrict(["patient"]), (req, res) => {
  getUserProfile(req, res); 
});
router.get('appointments/my-appointments', authenticate, restrict(["patient"]), (req, res) => {
  getMyAppointments(req, res); 
});

export default router;
  
