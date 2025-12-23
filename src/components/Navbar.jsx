import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Irene</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Info</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}

<header style={{
  background: "var(--accent-soft)",
  padding: "1rem 2rem"
}}>
</header>