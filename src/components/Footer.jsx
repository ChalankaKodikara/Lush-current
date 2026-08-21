import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div><div className="brand light">LUSH<span>VILLA</span></div><p>Quiet luxury, tropical living and memorable stays in Sri Lanka.</p></div>
      <div><h4>Explore</h4><Link to="/villas">Villas</Link><Link to="/gallery">Gallery</Link><Link to="/booking">Book now</Link></div>
      <div><h4>Contact</h4><p>Sri Lanka</p><p>hello@lushvilla.com</p><p>+94 77 000 0000</p></div>
    </footer>
  );
}