
  
// import mongoose from "mongoose";
// import { DB_NAME} from "../constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
import {app} from './app.js' 


dotenv.config({
    path: './env'
})


connectDB() //we need to write then and catch beacause its async await gives us promis 
.then(()=>{
    app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })   // They handle runtime express error

   app.listen(process.env.PORT || 8001, ()=>{
    console.log (`Server is running at port: ${process.env.PORT}`)
   })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err)
})



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
