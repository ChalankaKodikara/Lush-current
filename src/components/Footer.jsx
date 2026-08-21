import { Link } from "react-router-dom";
import { property } from "../data/villas";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <div className="site-brand footer-brand">LUSH <span>CURRENT</span></div>
          <p>A relaxed boutique stay near Zion Beach in Ahangama West, Sri Lanka.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/villas">The stay</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/booking">Book direct</Link>
        </div>
        <div>
          <h4>Location</h4>
          <p>{property.shortLocation}</p>
          <p>{property.beachDistance}</p>
          <a href={property.airbnbUrl} target="_blank" rel="noreferrer">View Airbnb listing</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Lush Current</span>
        <span>Made for slow days by the sea.</span>
      </div>
    </footer>
  );
}
