import express from "express";
import Donor from "../models/Donor.js";

const router = express.Router();

// ➕ Add new donor
router.post("/", async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).json({ message: "Donor added successfully!" });
  } catch (error) {
    console.error("Error saving donor:", error);
    res.status(500).json({ message: "Error saving donor data. Please try again." });
  }
});

// 📋 Get all donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ message: "Error fetching donor data." });
  }
});

export default router;
