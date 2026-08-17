//connecting the environment variable
import "./env.js";

// getting-started.js

import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);

    console.log("DATABASE DETAILS-------------->")
    console.log(db.connection.host);
    console.log(db.connection.port);
    console.log(db.connection.name);
    console.log(db.connection.readyState);
    console.log("<----------------DATABASE OVER")
    
  } catch (error) {
    console.log(`error connecting to DB : ${error}`);
  }
};

export default connectToDB;
