import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(ENV.DB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
}