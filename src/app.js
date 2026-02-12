import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"



const app = express();

//app.use(cors()) //also we add settings in cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))  // Parses incoming JSON requests and limits body size to 16KB (security & performance)

app.use(express.urlencoded({extended:true, limit:"16kb"}))  // Parses URL-encoded form data (supports nested objects) with 16KB limit basically read (html)url and convert it into object like { name: "prajwal", age: "1" } like that 

app.use(express.static("public")) /// Serves static files (images, CSS, PDFs, uploads) from the "public" folder from thre we can access files like hrml,css,pdf

app.use(cookieParser())



//Routes import
import userRouter from './routes/user.router.js'

//routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register
export {app}


 // get user details from frontend
   //validation - not empty
   //check if user already exists : username, email
   // check for images, check for avatar
   //upload them on cloudnary,avatar
   // create user object  - create entry in db
   //remove password and refresh token field from responce
   //check for user creation
   //return res