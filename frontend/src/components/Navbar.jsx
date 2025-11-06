import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-500">🩸 Blood Bridge</h1>
        <ul className="flex gap-4 text-gray-300 font-medium">
          <li><Link to="/" className="hover:text-white">Dashboard</Link></li>
          <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
          <li><Link to="/request" className="hover:text-white">Request</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
