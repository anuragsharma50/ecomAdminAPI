import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL);
        console.log("Connected with DB");
    } catch (error) {
        console.log("DB connection error");
        console.log(error);
    }
}
