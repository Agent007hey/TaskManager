import { createTask , getAllTasks , getOneTask } from "../services/task.service.js";

export const createController = async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  try {
    if (!title || !description || !status || !priority || !dueDate) {
      return res.status(400).json({
        success: false,
        message: "Invalid/Missing Data",
      });
    }

    const data = await createTask(
      title,
      description,
      status,
      priority,
      dueDate,
      req.user.id,
    );
    if (!data) {
      return res.status(500).json({
        success: false,
        message: "Error in createController",
      });
    }

    

    return res.status(201).json({
      success: true,
      message: "Task created Successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `error in createController: ${error}`,
    });
  }
};

export const allTaskController = async(req , res)=>{
  const userId = req.user.id;
  try {
    const data = await getAllTasks(userId);
    if(!data){
      return res.status(500).json({
        success:false,
        message:"Error in allTaskController",
      })
    }

    return res.status(200).json({
      success:true,
      message:"All tasks fetched successfully",
      data:data,
    })
}catch(error){
  return res.status(500).json({
    success:false,
    message:`error in allTaskController: ${error}`,
  })
}}

export const getOneTaskController = async(req , res)=>{
  const {id} = req.params;
  let taskId = id;
  if(!taskId){
    return res.status(400).json({
      success:false,
      message:"Invalid/Missing Input",
    })
  }
try {
  
  const data = await getOneTask(req.user.id , taskId);
  if(!data){
    return res.status(404).json({
      success:false,
      message:"No task found",

    });
    
  }

  return res.status(200).json({
    success:true,
    message:"Fetched the Task data successfully",
    data:data,
  })
} catch (error) {
  return res.status(500).json({
    success:false,
    message:`Error in getOneTaskController : ${error}`
  })
  
}
}
