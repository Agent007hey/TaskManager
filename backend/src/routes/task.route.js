import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { createController } from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.use(authMiddleware);

taskRouter.post("/" , createController );

export default taskRouter;