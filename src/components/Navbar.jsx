import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${ scrolled ? "navbar-scrolled" : ""}`}>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars /> }
      </button>

      <div className={`nav-links ${menuOpen ? "open" : " " }`}>
      <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
      <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      
    </nav>
  );
}

export default Navbar;
