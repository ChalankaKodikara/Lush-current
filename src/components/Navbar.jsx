import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/villas", "The Stay"],
    ["/gallery", "Gallery"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="site-nav">
      <Link className="site-brand" to="/" onClick={() => setOpen(false)}>
        LUSH <span>CURRENT</span>
      </Link>

      <button className="nav-menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "site-nav-links open" : "site-nav-links"}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <Link className="nav-book-button" to="/booking" onClick={() => setOpen(false)}>
          Book your stay
        </Link>
      </nav>
    </header>
  );
}
