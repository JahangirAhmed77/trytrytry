import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://userauth:auth1234@cluster0.n36oipi.mongodb.net/');
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("error while connecting to mongoDB", error);
  }
};

export default connectDB;
