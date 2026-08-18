import { createTask } from "../services/task.service.js";

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
