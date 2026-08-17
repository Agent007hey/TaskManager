import "../config/env.js";
import jwt from "jsonwebtoken"; //to verify the token 

import User from "../models/user.model.js"; //to fetch the data;

const authMiddleware = async(req , res, next)=>{
  try {
    const token = req.cookies?.token;

    if(!token){
      return res.status(401).json({
        success:false,
        message:"Unauthorized",
      })
    }
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if(!user){
      return res.json(401).json({
        success:false,
        message:"User not found",
      })
    }

    req.user = user; //ssending the data by adding a user property to req object
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
    
  }

}

export default authMiddleware;