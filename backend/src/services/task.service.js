import Task from "../models/task.model.js";

export const createTask =async (title , description , status , priority , dueDate , id)=>{

  const task = await Task.create({
    title,
    description,
    status,
    priority,
    dueDate,
     createdBy: id,
  });

  return task;

}

export const getAllTasks = async(userId)=>{
  const tasks  = await Task.find({createdBy:userId});
  return tasks;
}

export const getOneTask = async(userId, taskId)=>{
  const task = await Task.findOne({
    _id:taskId,
    createdBy:userId,
  });

  return task;
}

export const updateTask = async(taskId , userId , title , description , status)=>{

  const task = await Task.findOneAndUpdate({_id:taskId , createdBy:userId} , {title , description , status} , {returnDocument:'after'});

  return task;


}

export const deleteTask = async(taskId , userId)=>{

  const data = await Task.findOneAndDelete({_id:taskId , createdBy:userId} ); //always pass _id not id

  return data;

}