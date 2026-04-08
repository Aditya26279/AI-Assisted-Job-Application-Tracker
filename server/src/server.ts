import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import applicationRoutes from "./routes/applicationRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);

app.listen(5000, () => {
  console.log("server running");
});