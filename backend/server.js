import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Homepage API
app.get("/", (req, res) => {
  res.send("Smart Job Portal Backend is Running!");
});

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is working successfully!"
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
