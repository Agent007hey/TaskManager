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