import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["/villas","Villas"],["/gallery","Gallery"],["/contact","Contact"]];
  return (
    <header className="nav">
      <Link className="brand" to="/">LUSH<span>VILLA</span></Link>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "navlinks open" : "navlinks"}>
        {links.map(([to,label]) => <NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}
        <Link className="button small" to="/booking" onClick={()=>setOpen(false)}>Book your stay</Link>
      </nav>
    </header>
  );
}