import express from "express";
import Donor from "../models/Donor.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.json({ message: "Donor added successfully!" });
  } catch (error) {
    console.error("Error saving donor:", error);
    res.status(500).json({ message: "Error saving donor data" });
  }
});

export default router;
