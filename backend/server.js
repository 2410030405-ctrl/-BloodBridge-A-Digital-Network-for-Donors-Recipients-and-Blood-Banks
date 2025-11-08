import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import donorRoutes from "./routes/donorRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Add a simple route for root URL (so it doesn’t show “Cannot GET /”)
app.get("/", (req, res) => {
  res.send("🚀 BloodBridge Backend is Running Successfully!");
});

// Routes
app.use("/api/donors", donorRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
