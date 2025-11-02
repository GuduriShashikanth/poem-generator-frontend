// src/components/Header.tsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-purple-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo + Site Name */}
        <div className="flex items-center space-x-2">
     
          <h1 className="text-2xl font-bold">Poetica</h1>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-pink-300">Home</Link>
          <Link to="/about" className="hover:text-pink-300">About</Link>
        </nav>
      </div>
    </header>
  );
}
