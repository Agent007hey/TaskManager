import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    trim:true,
    minLength:3,
    required:[true , "Title is required"],
  },
  description:{
    type:String,
    required:[true , "Description is required"],
    trim:true,
    minLength:3,
  },

   status: {
  type: String,
  enum: ["pending", "in-progress", "completed"],
  default: "pending",
},
priority:{
  type:String,
  enum:["low" , "medium" , "high"],
  default:"low",
},

dueDate:{
  type:Date,
  default:Date.now,
},
createdBy:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
  required:true,

}
  
},{
  timestamps:true,
});


const Task = mongoose.model("Task" , taskSchema);

export default Task;