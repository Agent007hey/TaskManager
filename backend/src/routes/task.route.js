import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { createController , allTaskController} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.use(authMiddleware);

taskRouter.post("/" , createController );
taskRouter.get("/" , allTaskController);

export default taskRouter;