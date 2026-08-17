import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async(fullName , email , password)=>{
  const existUser = await User.findOne({email});
  if(existUser){
    throw new Error("Email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName,
    email,
   password: hashedPassword
  });

  return user;
  

}

export const loginUser = async(email , password)=>{
  const user = await User.findOne({email}).select("+password");
  if(!user){
    throw new Error("User doesn't exists");
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if(!isCorrectPassword){
    throw new Error("Invalid Credentials");
  }

  return user;


}