import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


dotenv.config({ path: "./.env" });

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host} \n PORT : ${connectionInstance.connection.port} DatabaseName:  ${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
