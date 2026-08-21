import { Link } from "react-router-dom";
import { Bath, BedDouble, Check, Clock3, ExternalLink, MapPin, Star, Users } from "lucide-react";
import { property, money } from "../data/villas";

export default function VillaDetails() {
  return (
    <main className="page-shell">
      <section className="detail-gallery">
        <img className="gallery-main" src={property.images[0]} alt="Lush Current" />
        {property.images.slice(1,5).map((image, index) => <img key={image} src={image} alt={`Lush Current ${index + 2}`} />)}
      </section>

      <section className="landing-section detail-layout">
        <div>
          <div className="section-kicker">ENTIRE GUESTHOUSE · AHANGAMA WEST</div>
          <h1>{property.listingName}</h1>
          <div className="rating-line"><Star size={16} fill="currentColor" /> {property.rating.toFixed(1)} · Guest favourite · {property.reviewCount} reviews</div>
          <div className="stay-meta detail-meta">
            <span><Users size={18} /> {property.guests} guests</span>
            <span><BedDouble size={18} /> {property.bedrooms} bedrooms · {property.beds} beds</span>
            <span><Bath size={18} /> {property.bathrooms} baths</span>
          </div>

          <div className="detail-copy-block"><h3>About this space</h3><p>{property.longDescription}</p></div>
          <div className="detail-copy-block"><h3>Guest access</h3><p>{property.guestAccess}</p></div>

          <div className="detail-copy-block">
            <h3>What this place offers</h3>
            <div className="amenity-list">{property.amenities.map((item) => <span key={item}><Check size={17} /> {item}</span>)}</div>
          </div>

          <div className="detail-copy-block">
            <h3>Good to know</h3>
            <div className="info-cards">
              <div><Clock3 /><span><small>Check-in</small><strong>{property.checkIn}</strong></span></div>
              <div><Clock3 /><span><small>Check-out</small><strong>{property.checkOut}</strong></span></div>
              <div><MapPin /><span><small>Beach</small><strong>{property.beachDistance}</strong></span></div>
            </div>
          </div>
        </div>

        <aside className="booking-card">
          <span>Direct website rate from</span>
          <h2>{money(property.price)} <small>/ night</small></h2>
          <p>Live Airbnb pricing can vary by dates. Use the direct booking form for your website rate.</p>
          <Link className="primary-button full" to="/booking">Choose dates</Link>
          <a className="secondary-button full" href={property.airbnbUrl} target="_blank" rel="noreferrer">View on Airbnb <ExternalLink size={15} /></a>
        </aside>
      </section>
    </main>
  );
}
