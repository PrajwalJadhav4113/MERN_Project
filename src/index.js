
  
// import mongoose from "mongoose";
// import { DB_NAME} from "../constants.js";
import connectDB from "./db/index.js";


connectDB();
// its frist approch
/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listning on port ${process.env.PORT}`)
        })
    }catch(error){
        console.error("ERROR:",error)
        throw err
    }
})()

*/