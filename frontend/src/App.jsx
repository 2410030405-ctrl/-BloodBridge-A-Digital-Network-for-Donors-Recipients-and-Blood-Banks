import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DonorForm from "./components/DonorForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-red-600 p-4 text-white text-center space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<DonorForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
