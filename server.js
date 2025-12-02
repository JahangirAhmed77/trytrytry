import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";


const app = express();
const port = 4000;

connectDB();

app.listen(port, () => {
  console.log(`Server in running on http://localhost:${port}`);
});

// middleware
const corsOptions = {
  origin: "https://user-auth-swart.vercel.app/", // frontend Url
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/user", userRouter);
