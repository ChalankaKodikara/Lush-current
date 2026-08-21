import { Link } from "react-router-dom";
import { ArrowRight, BedDouble, Bath, Users, MapPin } from "lucide-react";
import { property, money } from "../data/villas";

export default function Villas() {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <div className="section-kicker">THE STAY</div>
        <h1>Simple comfort,<br />close to the sea.</h1>
        <p>{property.description}</p>
      </section>
      <section className="landing-section property-overview">
        <div className="property-overview-image"><img src={property.image} alt={property.listingName} /></div>
        <div className="property-overview-copy">
          <span className="location-line"><MapPin size={16} /> {property.shortLocation}</span>
          <h2>{property.listingName}</h2>
          <p>{property.longDescription}</p>
          <div className="stay-meta">
            <span><Users size={18} /> {property.guests} guests</span>
            <span><BedDouble size={18} /> {property.bedrooms} bedrooms</span>
            <span><Bath size={18} /> {property.bathrooms} baths</span>
          </div>
          <div className="price-line"><span>From</span><strong>{money(property.price)}</strong><small>/ night</small></div>
          <Link className="primary-button" to="/villas/lush-current">View stay details <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
