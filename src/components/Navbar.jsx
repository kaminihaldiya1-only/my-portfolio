import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 bg-[#141A22]/90 backdrop-blur border-b border-[#2A323D] z-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center h-14 px-6">
        <Link to="/" className="font-serif text-lg font-medium hover:text-[#6FAE8C] transition-colors">
          Kamini Rani
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm text-[#8F98A3]">
          <Link
            to="/about"
            className={`hover:text-[#EDEAE2] transition-colors ${
              location.pathname === "/about" ? "text-[#6FAE8C]" : ""
            }`}
          >
            About
          </Link>
          <a href={isHome ? "#skills" : "/#skills"} className="hover:text-[#EDEAE2] transition-colors">
            Skills
          </a>
          <a href={isHome ? "#projects" : "/#projects"} className="hover:text-[#EDEAE2] transition-colors">
            Projects
          </a>
          <a href={isHome ? "#certifications" : "/#certifications"} className="hover:text-[#EDEAE2] transition-colors">
            Certifications
          </a>
          <a href={isHome ? "#contact" : "/#contact"} className="hover:text-[#EDEAE2] transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}