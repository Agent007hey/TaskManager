import { Router } from "express";
import { registerController , loginController , getCurrentUserController , logoutController} from "../controllers/auth.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const authRouter = Router();

//register the user
authRouter.post("/register" , registerController);
authRouter.post("/login" , loginController);
authRouter.get("/me" ,authMiddleware , getCurrentUserController);
authRouter.post("/logout" , authMiddleware , logoutController);

export default authRouter;