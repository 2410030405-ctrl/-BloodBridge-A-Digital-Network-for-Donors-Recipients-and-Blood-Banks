import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
});

export default mongoose.model("Donor", donorSchema);
