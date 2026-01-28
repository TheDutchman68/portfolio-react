import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#hero" >Home</a>
      <a href="#about" >About</a>
      <a href="#skills" >Skills</a>
      <a href="#projects" >Projects</a>
      <a href="#contact" >Contact</a>
    </nav>
  );
}

export default Navbar;
