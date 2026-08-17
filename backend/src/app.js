import express from "express";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json()); //it help in testing the api
app.use(cookieParser()) // for authentication

app.use("/api/v1/users" , authRouter); //connecting the authrouter 

export default app;