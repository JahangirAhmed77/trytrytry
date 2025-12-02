import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:user@cluster0.wascy33.mongodb.net/');
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("error while connecting to mongoDB", error);
  }
};

export default connectDB;
