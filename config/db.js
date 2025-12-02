import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:user@cluster0.wascy33.mongodb.net/userauth?retryWrites=true&w=majority');
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Error while connecting to mongoDB:", error.message);
    throw error;
  }
};

export default connectDB;
