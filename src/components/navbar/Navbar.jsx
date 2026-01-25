import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Define your mobile breakpoint here
  const mobileBreakpoint = 880;

  useEffect(() => {
    const handleScroll = () => {
      // Check the window width *every* time a scroll happens
      if (window.innerWidth > mobileBreakpoint) {
        // If desktop, apply the scroll logic
        window.scrollY > 50 ? setDarkMode(true) : setDarkMode(false);
      } else {
        // If mobile, force dark mode off (keep it light)
        setDarkMode(false);
      }
    };

    // Add the listener globally
    window.addEventListener("scroll", handleScroll);

    // Add a resize listener too, in case someone drags their browser width
    window.addEventListener("resize", handleScroll);

    // CRITICAL: Clean up both listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`container ${darkMode ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" />

      <ul className={menuOpen ? " " : "hide-menu"}>
        <h2>My Portfolio</h2>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="nav-button"
            activeClass="active"
            spy={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            offset={-200}
            duration={500}
            className="nav-button"
            activeClass="active"
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            offset={-300}
            duration={500}
            className="nav-button"
            activeClass="active"
            spy={true}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-300}
            duration={500}
            className="nav-button"
            activeClass="active"
            spy={true}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="nav-button"
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </li>
      </ul>
      <MenuIcon
        className="menu-icon"
        fontSize="large"
        sx={{
          color: "#fff",
          cursor: "pointer",
          display: "none",
          "@media (max-width: 840px)": {
            display: "block",
          },
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
