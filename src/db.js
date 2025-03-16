import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || "mongodb+srv://andysejas444:zIDYk2oBQWCvnsv0@pikachu.tbrrj.mongodb.net/?retryWrites=true&w=majority&appName=Pikachu";
        await mongoose.connect(mongoURI);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};