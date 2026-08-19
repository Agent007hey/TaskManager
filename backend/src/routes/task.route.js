import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { createController , allTaskController , getOneTaskController ,updateTaskController , deleteTaskController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.use(authMiddleware);

taskRouter.post("/" , createController );
taskRouter.get("/" , allTaskController);
taskRouter.get("/:id" , getOneTaskController);
taskRouter.put("/:id" , updateTaskController);
taskRouter.delete("/:id" , deleteTaskController);
 

export default taskRouter;