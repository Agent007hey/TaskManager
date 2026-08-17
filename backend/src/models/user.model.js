import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    trim:true,
    minlength:4,
    required:[true , "Fullname  is required "],

  },
  email:{
    type:String,
    trim:true,
    unique:true,
    lowercase:true, 
    required:[true , "Email is required "],
  },
  password:{
    type:String,
    required:[true , "Password is required"],
    minlength: [8, "Password must be at least 8 characters"] ,
    select:false,
  }
}, {
  timestamps:true,
}
)

const User = mongoose.model("User" , userSchema);

export default User;