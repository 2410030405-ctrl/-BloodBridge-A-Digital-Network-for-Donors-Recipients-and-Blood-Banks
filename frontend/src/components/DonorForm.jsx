import React, { useState } from "react";

function DonorForm() {
  const [formData, setFormData] = useState({
    name: "",
    bloodType: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://bloodbridge-a-digital-network-for-donors.onrender.com/api/donors",{
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      const data = await response.json();
      alert(data.message || "Donor added successfully!");
      setFormData({ name: "", bloodType: "", phone: "", email: "", city: "" });
    } catch (error) {
      alert("Error saving donor data. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Donor Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="border p-2 w-full rounded" required />
        <input name="bloodType" value={formData.bloodType} onChange={handleChange} placeholder="Blood Type" className="border p-2 w-full rounded" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="border p-2 w-full rounded" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full rounded" required />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 w-full rounded" required />
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DonorForm;
