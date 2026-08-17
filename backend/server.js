
import app from "./src/app.js";
import "./src/config/env.js";
import connectToDb from "./src/config/db.js";

const PORT = process.env.PORT || 8000;

const connectToServer = async ()=>{
  

  try {
    
    await connectToDb();
    //connecting the server
    app.listen(PORT , ()=>{
      console.log(`app is listening on port ${PORT}`);
    })
  } catch (error) {

    console.log(`error connecting to server ${error}`);
    
  }
}

connectToServer();