import generateToken from "../../utils/generateJWToken.js";
import { createUser , loginUser } from "../services/auth.service.js";

export const registerController = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing/Invalid fields",
    });
  }
  //checking password
  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be atleast of 8 character",
    });
  }

  //checking email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }
  try {
    const user = await createUser(fullName, email, password);
    return res.status(201).json({
      success: true,
      message: "User created Successfully",
      data: user,
    });
  } catch (error) {
    console.log(`  ${error}`);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing/Invalid fields",
    });
  }

  try {
    const user = await loginUser(email, password);
    const token = generateToken(user.id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production with HTTPS
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    user.password = undefined; // before sending the user we must remove the passsword 
    return res.status(200).json({
      success: true,
      data: user,
      message: "Login Successfully",
    });
  } catch (error) {
    console.log(`error in loginUser: ${error}`);
    return res.status(500).json({
      success: false,
      message: `${error}`,
    });
  }
};

export const getCurrentUserController = async(req , res)=>{
  return res.status(200).json({
    success:true,
    data:req.user,
    message:"User fetched successfully"
  })

}

export const logoutController = async(req , res)=>{
  res.clearCookie("token" , {
    httpOnly:true,
    secure:false ,//true in production with https
    sameSite:"lax",
  });

  return res.status(200).json({
    success:true,
    message:"Logout Successfully",
  })
}