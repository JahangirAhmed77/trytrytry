import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";


const app = express();
const port = process.env.PORT || 4000;

// middleware
const corsOptions = {
  origin: "https://user-auth-swart.vercel.app/", // frontend Url
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/user", userRouter);

// Connect to DB first, then start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error("Failed to connect to database. Server not started.");
  process.exit(1);
});
