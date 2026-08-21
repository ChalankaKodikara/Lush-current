import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CalendarDays, ExternalLink, MapPin, Star, Users } from "lucide-react";
import { property, money } from "../data/villas";

export default function Booking() {
  const [params] = useSearchParams();
  const [checkIn, setCheckIn] = useState(params.get("checkIn") || "");
  const [checkOut, setCheckOut] = useState(params.get("checkOut") || "");
  const [guests, setGuests] = useState(Number(params.get("guests") || 2));

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const diff = Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000);
    return Math.max(1, diff);
  }, [checkIn, checkOut]);

  const stayTotal = property.price * nights;

  return (
    <main className="page-shell booking-page-shell">
      <section className="page-hero compact">
        <div className="section-kicker">DIRECT BOOKING</div>
        <h1>Plan your stay.</h1>
        <p>Select your dates and guests. This page uses the configured direct website rate; Airbnb may show a different live rate depending on dates and fees.</p>
      </section>

      <section className="landing-section booking-layout">
        <div className="booking-form-card">
          <div className="booking-form-heading">
            <div><Star size={16} fill="currentColor" /> {property.rating.toFixed(1)} · Guest favourite</div>
            <h2>{property.listingName}</h2>
            <p><MapPin size={15} /> {property.shortLocation}</p>
          </div>

          <div className="form-grid">
            <label><span><CalendarDays size={16} /> Check in</span><input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} /></label>
            <label><span><CalendarDays size={16} /> Check out</span><input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} /></label>
            <label><span><Users size={16} /> Guests</span><select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>{[1,2,3,4,5].map((g) => <option key={g} value={g}>{g} {g === 1 ? "guest" : "guests"}</option>)}</select></label>
          </div>

          <div className="booking-note">
            <strong>House times</strong>
            <span>Check-in {property.checkIn}</span>
            <span>Check-out {property.checkOut}</span>
          </div>
        </div>

        <aside className="booking-summary-card">
          <img src={property.image} alt={property.name} />
          <div className="summary-content">
            <span className="summary-kicker">ESTIMATED DIRECT RATE</span>
            <div className="summary-row"><span>{money(property.price)} × {nights} night{nights > 1 ? "s" : ""}</span><strong>{money(stayTotal)}</strong></div>
            <div className="summary-row total"><span>Estimated total</span><strong>{money(stayTotal)}</strong></div>
            <p>Taxes, payment terms and final availability should be confirmed before accepting payment.</p>
            <a className="primary-button full" href={property.airbnbUrl} target="_blank" rel="noreferrer">Check Airbnb availability <ExternalLink size={15} /></a>
          </div>
        </aside>
      </section>
    </main>
  );
}
