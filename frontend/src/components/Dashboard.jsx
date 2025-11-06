import React, { useEffect, useState } from "react";

function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/donors")
      .then((res) => res.json())
      .then((data) => setDonors(data))
      .catch((err) => console.error("Error fetching donors:", err));
  }, []);

  const filteredDonors = donors.filter(
    (donor) =>
      donor.bloodType.toLowerCase().includes(search.toLowerCase()) ||
      donor.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
        Donor Dashboard
      </h2>

      <input
        type="text"
        placeholder="Search by blood type or city..."
        className="border p-2 w-full rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredDonors.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-red-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Blood Type</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">City</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonors.map((donor) => (
              <tr key={donor._id}>
                <td className="border p-2">{donor.name}</td>
                <td className="border p-2">{donor.bloodType}</td>
                <td className="border p-2">{donor.phone}</td>
                <td className="border p-2">{donor.email}</td>
                <td className="border p-2">{donor.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600">No donors found.</p>
      )}
    </div>
  );
}

export default Dashboard;
